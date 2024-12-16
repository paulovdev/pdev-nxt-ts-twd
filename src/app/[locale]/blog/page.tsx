import { MotionSection } from "@/components/motion";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface Blog {
  id: number;
  title: string;
  date: string;
}

export default function Blog() {
  const t = useTranslations('Blog');

  const miniBlogs: Blog[] = [
    {
      id: 1,
      title: t('articles.1.title'),
      date: t('articles.1.date'),
    },
    {
      id: 2,
      title: t('articles.2.title'),
      date: t('articles.2.date'),
    },
    {
      id: 3,
      title: t('articles.3.title'),
      date: t('articles.3.date'),
    }
  ];

  return (
    <MotionSection
      className='relative max-w-[500px] my-0 mx-auto pt-[15px] pr-[15px] pb-[200px] pl-[15px]'
      initial={{ opacity: 0, filter: "blur(15px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(15px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>
      <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-normal'>{t('title')}</h1>
      <p className='mb-8 text-p3 text-[1.1rem] font-[500] tracking-[-.5px] leading-[1.2]'>{t('description')}</p>

      <div className="w-full flex flex-col gap-4">
        {miniBlogs.map(blog => (
          <Link
            href={`/blog/${blog.id}`}
            key={blog.id}
            className="w-full h-[125px] p-[1.5rem] bg-bg2 rounded-3xl flex items-start justify-end flex-col transition-all
                      hover:bg-bg2h">
            <h2 className="mb-2 text-p text-[1rem] font-[500] tracking-[-.2px] leading-[1.25] text-ellipsis whitespace-nowrap overflow-hidden">{blog.title}</h2>
            <p className="text-p3 text-[1rem] font-[500] tracking-[-.2px] leading-[1.25]">{blog.date}</p>
          </Link>
        ))}
      </div>
    </MotionSection>
  );
}
