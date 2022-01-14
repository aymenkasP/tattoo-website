

async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}



export async function getHeroes() {
    const Hero = await fetchGraphQL(
        `query {
          heroCollection {
            items {
              title
              subtitle {
                json
              }
              callToAction
            }
          }
        }
          `,
    )

   
    return Hero?.data?.heroCollection?.items
}


export async function getAbout() {
    const About = await fetchGraphQL(
      `query {
        aboutCollection {
          items {
            about {
              json
            }
            aboutUsImage {
              url
              width
              height
            }
          }
        }
      }
        `,
    )



    return About?.data.aboutCollection.items
}

export async function getArtists() {
  const Artists = await fetchGraphQL(
      `query {
        artistsCollection {
          items {
            artistName 
            artistImage {
              url
            }
            aboutTheArtist {
              json
            }
          }
        }
      }
        `,
  )
  
  return Artists?.data.artistsCollection.items
}

export async function getArtistsByName(artistsName) {
    const Artist = await fetchGraphQL(
      `query {
        artistsCollection (where:{artistName : "${artistsName}"}) {
          items {
            artistName 
            artistImage {
              url
            }
            aboutTheArtist {
              json
            }
            phoneNumber 
            address
            facebook
            instagram
            email
          }
        }
      }
        `, )
        return Artist?.data.artistsCollection.items

}






export async function getGallery() {
    const Gallery = await fetchGraphQL(
      `query {
        galleryCollection {
          items {
            work {
              url
              fileName
            }
            artist {
              artistName
            }
          }
        }
      }`
    )

    return Gallery?.data.galleryCollection.items
}

export async function ArtistWork(name) {
    const TheWork = await fetchGraphQL(
      `query {
        galleryCollection (where : {artist : {artistName : "${name}"}}) {
          items {
            work {
              url
            }
            artist {
              artistName
            }
          }
        }
      }`
    )

    return TheWork?.data.galleryCollection.items
}