import React from 'react'


export default function Home({data}: any) {
  console.log(data)

  const postHtml = data.map((post: any, i: any) => {
    return(
      <p key={post.id}>{post.title.rendered}</p>
    )
  })
  return (
    <div>
    {postHtml}
    </div>
  )
}

export async function getServerSideProps(context: any){
  const res = await fetch('https://blog.devsgraphics.co.ke/wp-json/wp/v2/posts')
  const data =await res.json()

  if (!data) {
    return{
      notFound: true,
    }
   
  } return{
      props: {
        data
      },
    }
}