const quotes = [
    {
        quote : "아침먹고 땡 점심먹고 땡",
        author : "이소희",
    },
    {
        quote : "아 배고프다 왜지 어쩔 수 없나",
        author : "배고프니 3세",
    },
    {
        quote : "자바스크립트랑 자바는 왜 이름이 비슷해선.",
        author : "헷갈리우스 5세",
    },
    {
        quote : "코딩을 매일하면 실력이 늘까요?",
        author : "김공부",
    },
    {
        quote : "파이썬을 배워야 해킹한다는데",
        author : "최파이썬",
    },
    {
        quote : "드라이기로 머리말리는 거 귀찮다.",
        author : "주호민",
    },
    {
        quote : "달걀안에 병아리가 있을까봐 무섭다고.",
        author : "박양계",
    },
    {
        quote : "오늘 저녁은 치킨이닭!",
        author : "총잡이",
    },
    {
        quote : "편의점 알바를 하다보면 많은 사람을 만나지",
        author : "윤말랑",
    },
    {
        quote : "파송송 계란탁 라면짱",
        author : "짱라면",
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;