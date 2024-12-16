import { GoArrowLeft } from "react-icons/go";
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { MotionSection } from "@/components/motion";

interface Blog {
    id: number;
    title: string;
    date: string;
    content: string[];
}

interface BlogIdQuery {
    params: Promise<{
        blogId: string;
    }>;
}

export default async function BlogServer({ params }: BlogIdQuery) {
    const { blogId } = await params;

    const t = await getTranslations('');

    if (!blogId) {
        return <p className="">Id not found.</p>;
    }

    const miniBlogs: Blog[] = [
        {
            id: 1,
            title: t('BlogPost.content.1.title'),
            date: t('BlogPost.content.1.date'),
            content: [
                t('BlogPost.content.1.content.0'),
                t('BlogPost.content.1.content.1'),
                t('BlogPost.content.1.content.2')
            ]
        },
        {
            id: 2,
            title: t('BlogPost.content.2.title'),
            date: t('BlogPost.content.2.date'),
            content: [
                t('BlogPost.content.2.content.0'),
                t('BlogPost.content.2.content.1'),
                t('BlogPost.content.2.content.2')
            ]
        },
        {
            id: 3,
            title: t('BlogPost.content.3.title'),
            date: t('BlogPost.content.3.date'),
            content: [
                t('BlogPost.content.3.content.0'),
                t('BlogPost.content.3.content.1'),
                t('BlogPost.content.3.content.2'),
                t('BlogPost.content.3.content.3')
            ]
        }
    ];

    const blog = miniBlogs.find(blog => blog.id === parseInt(blogId));

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <MotionSection
            className='relative max-w-[500px] my-0 mx-auto pt-[15px] pr-[15px] pb-[200px] pl-[15px]'
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>


            <Link href="/blog" className="w-fit py-[.5rem] pr-[1.5rem] pl-[1.1rem] mb-6 text-[.9rem] font-[500] text-p rounded-full bg-bg2 flex items-center gap-4 cursor-pointer transition-all hover:bg-bg2h"><GoArrowLeft /> {t('BlogPost.backToBlogs')}</Link>

            <h1 className='mb-2 text-p text-[2rem] font-[600] tracking-[-.5px] leading-[1.2] flex items-center justify-between'>{blog.title}
                <span className="text-p3 text-[1rem] font-[400] tracking-[-.5px] leading-[1.3]">{blog.date}</span>
            </h1>
            <div className="border-left"></div>
            {blog.content.map((paragraph, index) => (
                <p key={index} className="mb-8 text-p3 text-[1.2rem] font-[500] tracking-[-.3px] leading-[1.3]">{paragraph}</p>
            ))}
        </MotionSection>
    );
}
