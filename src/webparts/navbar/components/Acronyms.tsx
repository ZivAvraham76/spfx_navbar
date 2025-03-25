import * as React from 'react';
import '../../../../assets/dist/tailwind.css';
import { useEffect, useState } from 'react';

interface IUser {
  Title: string;
}



const Acronyms: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  // Fetch the current user
  const fetchCurrentUser = async () => {
    const siteUrl = "https://mosh12.sharepoint.com";

    try {
      const response = await fetch(`${siteUrl}/_api/web/currentuser`, {
        method: "GET",
        headers: {
          "Accept": "application/json;odata=nometadata"
        }
      });

      const data = await response.json();
      setCurrentUser(data);
      console.log("Current User:", data);

    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  const getInitials = (fullName: string) => {
    const nameParts = fullName.split('  ');
    const firstNameInitial = nameParts[0]?.charAt(0).toUpperCase();
    const lastNameInitial = nameParts[1]?.charAt(0).toUpperCase();

    return `${firstNameInitial}${lastNameInitial}`;
  };


  return (
        <div className="ml-auto w-8 h-8 rounded-full flex items-center justify-center border-2 borderv-zinc-90">
              {currentUser ? getInitials(currentUser.Title) : ''}
      </div>
  );
};

export default Acronyms;
