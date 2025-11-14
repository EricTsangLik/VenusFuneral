/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styled from 'styled-components';
import Text from '../text/text';

export interface BlogCardProps {
  href: string;
  thumbnail?: string;
  title: string;
}

const Thumbnail = styled.img`
  border-radius: 12px;
  height: 300px;
  object-fit: cover;
  width: 100%;
`;

const StyledBlogCard = styled.div`
  transition: 300ms ease;

  & > p {
    margin-top: 8px;
  }

  &:hover {
    transform: translateY(-12px);
    transition: 300ms ease;
  }
`;

export function BlogCard({ href, thumbnail, title }: BlogCardProps) {
  return (
    <Link href={href}>
      <a>
        <StyledBlogCard>
          <Thumbnail src={thumbnail} alt="thumbnail" />
          <Text fontSize="subtitle" component="p">{title}</Text>
        </StyledBlogCard>
      </a>
    </Link>
  );
}

export default BlogCard;
