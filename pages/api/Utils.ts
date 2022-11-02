import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'

type Data = { }

export async function getServerSideProps(context: any) {
    const res = await fetch(
      'https://blog.devsgraphics.co.ke/wp-json/wp/v2/posts'
    );
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data,
      },
    };
  }

  function Utils({data}): InferGetServerSidePropsType<typeof getServerSideProps>) {
    // will resolve data to type Data
  }
  
  
  export default Utils.