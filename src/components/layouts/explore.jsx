import { useEffect } from "react"

const Explore = () => {
  useEffect(() => {
    document.title = "Explore"
  }, [])

  const initial = [
    {
      src: "https://avatars.mds.yandex.net/i?id=bb5e3610e853fc67da8cea12b5f2d55162fdeba9-6327735-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=323463c70128a15885e102241fa4473f2ad8bcd7-8132087-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=367c298cd469c640ec60e988ee6411d90a28f3e9-7947996-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=8a631dcadb19700541d837a8c2ead5c2d4562947-8497033-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=8f7714a9e7edbf7225bc75134e6f6fbdfc452c76-8354186-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=bb5e3610e853fc67da8cea12b5f2d55162fdeba9-6327735-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=323463c70128a15885e102241fa4473f2ad8bcd7-8132087-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=367c298cd469c640ec60e988ee6411d90a28f3e9-7947996-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=8a631dcadb19700541d837a8c2ead5c2d4562947-8497033-images-thumbs&n=13",
    },
    {
      src: "https://avatars.mds.yandex.net/i?id=8f7714a9e7edbf7225bc75134e6f6fbdfc452c76-8354186-images-thumbs&n=13",
    },
  ]

  return (
    <div className="explorer">
      <div className="explorer__body">
        <div className="explorer__list">
          {initial
            ? initial.map((item, ind) => (
                <div key={ind} className="explorer__item">
                  <img src={item.src} alt="" />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}

export default Explore
