
let state = {
    messagePage: {
        dialogData: [
            {id: 1, name: "Roma", profilePic: "https://64.media.tumblr.com/04d4b26e5077542ffa73db1e53fc355e/0f531358effc80d6-20/s1280x1920/f4d29666615242d628c2021d5c15e15c2b62163d.png"},
            {id: 2, name: "Artem", profilePic: "https://i.pinimg.com/originals/ba/14/e5/ba14e5136cb81d89a06876f5a760ed61.jpg"},
            {id: 3, name: "Iqos", profilePic: "https://i.pinimg.com/736x/33/79/a9/3379a9789af4efccd985b582ab106170.jpg"},
            {id: 4, name: "Eva", profilePic: "https://static.wikia.nocookie.net/hunterxhunter/images/3/3e/HxH2011_EP147_Gon_Portrait.png"},
            {id: 5, name: "Zheton", profilePic: "https://nntheblog.com/wp-content/uploads/2021/07/Emperor-time.jpg"},
            {id: 6, name: "Miyagi", profilePic: "https://64.media.tumblr.com/a54088bb6f7113a6bff6077612ac6c0d/cd397c139beb3533-19/s540x810/576154646a27eb026c545b062db168deb11282bb.jpg"},
            {id: 7, name: "Papa tiur'my", profilePic: "https://64.media.tumblr.com/dac91fb9d08cfb1020a8ec4dea2b951d/28608ea88533644b-cc/s1280x1920/c18db8c4ba072d8e4f564dfa4bb6af40dafe8970.jpg"},
            {id: 8, name: "Anton", profilePic: "https://pbs.twimg.com/profile_images/639616445417066497/hkxvFwvy_400x400.png"}
        ],
        messageData: [
            {id: 1, message: "Старіна, пора пити пиво."},
            {id: 2, message: "Яке ставлю пиво, у мене на баліку 20 грн."},
            {id: 3, message: "А чому я пишу сам до себе, це шиза?"},
            {id: 4, message: "Базару ноль."},
            {id: 5, message: "Коли я вже нарешті приїду в цю Венецію?!"},
            {id: 6, message: "Hi, I would like to buy your Mageblood Heavy Belt listed for 235 divine in Kalandra (stash tab \"b/o 1 mirror\"; position: left 7, top 9)"},
            {id: 7, message: "Я короч за хлібом пішов, скоро буду"},
            {id: 8, message: "Ех, от би першокурсниця показала кімнату"}
        ],
    },
    profilePage: {
        postData: [
            {
                id: 1,
                postMessage: "Hey everyone, that is my first try of working with props",
                love: "21 ",
                hate: "3 "
            },
            {
                id: 2,
                postMessage: "Search for the keywords to learn more about each warning.",
                love: "1 ",
                hate: "15 "
            },
            {
                id: 3,
                postMessage: "Who am I?",
                love: "4 ",
                hate: "0 "
            },
            {
                id: 4,
                postMessage: "Am i afraid for learning smth new? Nope.",
                love: "5 ",
                hate: "1 "
            }
        ]
    }
}

export let addPost = (newPostMessage) => {
    let newPost = {
        id: 0,
        postMessage: newPostMessage,
        love: "0 ",
        hate: "0 "
    }
    state.profilePage.postData.push(newPost);
}


export default state;