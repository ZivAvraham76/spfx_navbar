import * as React from 'react';

const Services: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const toggleDropdown = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent): void => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  const services = [
    {
      service: "Lab Voucher Request",
      link: "https://service.checkpoint.com/servicedesk/customer/portal/39/create/842"
    },
    {
      service: "Certification Exam Request",
      link: "https://service.checkpoint.com/servicedesk/customer/portal/39/create/533"
    },
    {
      service: "Udemy License Request",
      link: "https://service.checkpoint.com/servicedesk/customer/portal/39/create/584"
    },
    {
      service: "Public Training Request",
      link: "https://service.checkpoint.com/servicedesk/customer/portal/39/create/585"
    },
    {
      service: "Report Training/ LMS Issue",
      link: "https://service.checkpoint.com/servicedesk/customer/portal/39/create/744"
    }
  ];

  return (
    <div ref={dropdownRef}>
      <button onClick={toggleDropdown}>
        <h4  className= "justify-start text-zinc-900 text-base font-normal font-Poppins">Services</h4>
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-[200px] rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50 max-h-30 overflow-y-auto">
          {services.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                {item.service}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Services;
