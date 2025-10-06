import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link 
            to="/" 
            className="flex items-center text-gray-600 hover:text-primary transition-colors"
            itemProp="item"
          >
            <Home className="w-4 h-4" />
            <meta itemProp="name" content="Hem" />
            <meta itemProp="position" content="1" />
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            {item.href ? (
              <Link 
                to={item.href} 
                className="text-gray-600 hover:text-primary transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
                <meta itemProp="position" content={String(index + 2)} />
              </Link>
            ) : (
              <span className="text-gray-900 font-medium" itemProp="name">
                {item.label}
                <meta itemProp="position" content={String(index + 2)} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;