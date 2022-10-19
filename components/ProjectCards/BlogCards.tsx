import React from 'react';
import Image from 'next/image';
import Zoom from 'react-reveal/Zoom';
import { useRouter } from 'next/router';
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography
} from '@mui/material';

interface Iprops {
  blog: any;
}

const BlogCard = (props: Iprops) => {
  const { blog } = props;
  const { cover_image, title, tag_list, url } = blog;
  const router = useRouter();

  const myLoader = ({ src, width, quality }: any) => {
    return cover_image;
  };

  return (
    <>
      <Card sx={{ maxWidth: 600 }}>
        <CardActionArea>
          <CardMedia title="Video Calls">
            <Zoom>
              <Image
                loader={myLoader}
                src="Me.png"
                alt="Video Calls"
                width={600}
                height={300}
                objectFit="cover"
              />
            </Zoom>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
              {tag_list?.map((tag: string, id: number) => (
                <Chip
                  label={tag}
                  key={id}
                  variant="outlined"
                  sx={{ margin: '3px' }}
                />
              ))}
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ padding: '1rem 2rem' }}>
          <Button
            size="small"
            variant="contained"
            onClick={() => router.push(url)}
          >
            Read Blog
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default BlogCard;
