interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader = ({ title, description, className = "" }: PageHeaderProps) => {
  return (
    <div className={`py-20 bg-secondary ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-600 animate-fadeIn">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;