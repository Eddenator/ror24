import { useEffect } from 'react';

interface DocumentHeadProps {
  title: string;
  description: string;
}

const DocumentHead = ({ title, description }: DocumentHeadProps) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default DocumentHead;