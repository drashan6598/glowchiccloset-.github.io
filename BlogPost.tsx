import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blog';
import { toast } from 'sonner';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleBookmark = () => {
    toast.success('Article bookmarked!');
  };

  return (
    <div className="w-full bg-[#F6F4F2] pt-32 pb-20">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#6F6F6F] hover:text-[#D4A5A5] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <span className="category-badge mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-display text-3xl lg:text-5xl font-bold text-[#111111] mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#6F6F6F]">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="fashion-card aspect-[16/9] overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-[#111111]/10">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6F6F6F]">Share:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="w-9 h-9 bg-[#F6F4F2] rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="w-9 h-9 bg-[#F6F4F2] rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="w-9 h-9 bg-[#F6F4F2] rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleBookmark}
              className="flex items-center gap-2 text-sm text-[#6F6F6F] hover:text-[#D4A5A5] transition-colors"
            >
              <Bookmark className="w-4 h-4" />
              Save for later
            </button>
          </div>

          {/* Article Content */}
          <div
            className="blog-content mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-[#F6F4F2] rounded-full text-sm text-[#6F6F6F]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="bg-white rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#D4A5A5]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-[#D4A5A5]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#111111]">
                  Written by {post.author}
                </h3>
                <p className="text-sm text-[#6F6F6F] mt-1">
                  Fashion enthusiast and style expert at GlowChic Closet. Passionate about helping Indian women discover their perfect style.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#D4A5A5]">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-display text-sm font-semibold text-[#111111] mt-1 group-hover:text-[#D4A5A5] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
