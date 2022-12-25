import React, { useEffect } from "react"

import "./test.scss"
import UserHistory from "./userHistory/userHistory"

function Test() {
  const initial = [
    {
      history: true,
      name: "petya",
      img: "https://avatars.mds.yandex.net/i?id=17900f53c2f2ccad0908f3008eb28e54b2270de5-8210081-images-thumbs&n=13",
      src: "https://krasivosti.pro/uploads/posts/2021-04/1617917158_31-p-kot-v-chernikh-ochkakh-33.jpg",
    },
    {
      history: false,
      name: "Katya",
      img: "https://avatars.mds.yandex.net/i?id=f359818fc94e69bb42edb08d533a7c1fa46b25f0-7756253-images-thumbs&n=13",
      src: "https://i.pinimg.com/originals/b2/6b/6d/b26b6d34bad3291c164240dc64265cfa.jpg",
    },
    {
      history: true,
      name: "Sasha",
      img: "https://avatars.mds.yandex.net/i?id=630dc2df0bcc845202d37fec83e8b13a-3692918-images-thumbs&n=13",
      src: "https://answit.com/wp-content/uploads/2017/01/full-hd.jpg",
    },
    {
      history: true,
      name: "Polina",
      img: "https://avatars.mds.yandex.net/i?id=86feea430092867f2968cc7aa5edbde8cf9d773f-7543894-images-thumbs&n=13",
      src: "https://i.pinimg.com/originals/b2/6b/6d/b26b6d34bad3291c164240dc64265cfa.jpg",
    },
    {
      history: true,
      name: "Vlad",
      img: "https://avatars.mds.yandex.net/i?id=e4e9ce94140f22f43945ae734f8434c01d919974-7545493-images-thumbs&n=13",
      src: "https://krasivosti.pro/uploads/posts/2021-04/1617917158_31-p-kot-v-chernikh-ochkakh-33.jpg",
    },
    {
      history: true,
      name: "Igor",
      img: "https://avatars.mds.yandex.net/i?id=da11069d6ffd873ce554fecf8864f58bc35ff319-8553021-images-thumbs&n=13",
      src: "https://answit.com/wp-content/uploads/2017/01/full-hd.jpg",
    },
  ]

  useEffect(() => {
    document.title = "BeautyGram"
  }, [])

  return (
    <>
      <div className="posts">
        <div className="posts__container">
          <div className="stories">
            <div className="stories__container">
              <div className="stories__body">
                {initial &&
                  initial
                    .sort((a, b) => b.history - a.history)
                    .map((u) => (
                      <div key={u.name} className="stories__user">
                        <UserHistory history={u.history} img={u.img} />
                        <button className="stories__name">{u.name}</button>
                      </div>
                    ))}
              </div>
            </div>
          </div>
          <div className="posts__body">
            {initial &&
              initial.map((u) => (
                <article key={u.name} className="posts__post">
                  <div className="posts__header posts-user">
                    <UserHistory history={u.history} img={u.img} />
                    <div className="posts-user__body">
                      <div className="posts-user__info">
                        <a href="##" className="posts-user__name">
                          {u.name}
                        </a>
                        <button className="posts-user__subscribe">
                          Подписаться
                        </button>
                      </div>
                      <span className="posts-user__maps">locations</span>
                    </div>
                  </div>
                  <img className="posts__img" src={u.src} alt="img" />
                  <div className="posts__footer">
                    <div className="like">
                      <button className="like__btn">
                        <i className="bi bi-heart" />
                      </button>
                      <p className="like__text">69 отметок "Нравится"</p>
                    </div>
                    <div className="posts-user">
                      <a href="##" className="posts-user__name">
                        {u.name}
                      </a>
                      <p className="posts-user__text">Красиво</p>
                    </div>
                    <div className="posts__date">20 декабря</div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>

      <div className="info">
        <div className="info__container">
          <div className="info__user">user</div>
          <div className="info__recom">recom</div>
          <div className="info__payload">payload</div>
        </div>
      </div>
    </>
  )
}

export default Test
