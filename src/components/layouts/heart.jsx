import { useEffect } from "react"

const Heart = () => {
  useEffect(() => {
    document.title = "Heart"
  }, [])
  return (
    <div className="heart">
      <div className="heart__container">
        <div className="heart__list">
          <h2 className="heart__title">На этой неделе</h2>
          <div className="heart__info">
            <div className="heart__item">
              <div className="heart__logo">
                <img
                  src="https://avatars.mds.yandex.net/i?id=17900f53c2f2ccad0908f3008eb28e54b2270de5-8210081-images-thumbs&n=13"
                  alt=""
                />
              </div>
              <p className="heart__text">
                <span className="heart__user">Dima </span>
                нравится ваше фото <span className="heart__date">1 дн</span>
              </p>
            </div>
            <div className="heart__image">
              <img
                src="https://avatars.mds.yandex.net/i?id=2e2485983a0031585d02f562e4defc0b0fc273a9-7025550-images-thumbs&n=13"
                alt=""
              />
            </div>
          </div>
          <div className="heart__info">
            <div className="heart__item">
              <div className="heart__logo">
                <img
                  src="https://avatars.mds.yandex.net/i?id=17900f53c2f2ccad0908f3008eb28e54b2270de5-8210081-images-thumbs&n=13"
                  alt=""
                />
              </div>
              <p className="heart__text">
                <span className="heart__user">Dima </span>
                нравится ваше фото <span className="heart__date">1 дн</span>
              </p>
            </div>
            <div className="heart__image">
              <img
                src="https://avatars.mds.yandex.net/i?id=2e2485983a0031585d02f562e4defc0b0fc273a9-7025550-images-thumbs&n=13"
                alt=""
              />
            </div>
          </div>
          <div className="heart__info">
            <div className="heart__item">
              <div className="heart__logo">
                <img
                  src="https://avatars.mds.yandex.net/i?id=17900f53c2f2ccad0908f3008eb28e54b2270de5-8210081-images-thumbs&n=13"
                  alt=""
                />
              </div>
              <p className="heart__text">
                <span className="heart__user">Dima </span>
                нравится ваше фото <span className="heart__date">1 дн</span>
              </p>
            </div>
            <div className="heart__image">
              <img
                src="https://avatars.mds.yandex.net/i?id=2e2485983a0031585d02f562e4defc0b0fc273a9-7025550-images-thumbs&n=13"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heart
