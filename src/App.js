function App() {
  const arr = [
    {
      "id":"1231",
      "url":"https://m.media-amazon.com/images/I/81bNXatEQkL._AC_UY218_.jpg",
      "title":"Yodha",
      "price":"279",
      "year" : "2024 | Ages 16 and Older | CC",
      "Starring": "Sidharth Malhotra , Raashii Khanna and Disha Patani",
      "directedBy": "Sagar Ambre and Pushkar Ojha"
    },
    {
      "id":"1232",
      "url":"https://m.media-amazon.com/images/I/81+noTP8OML._AC_UY218_.jpg",
      "title":"Aavesham",
      "price":"279",
      "year" : "2024 | Ages 13 and Older | CC",
      "Starring": "Fahadh Faasil , Sajin Gopu , Hipzster Pranav , et al.",
      "directedBy": "Jithu Madhavan"
    },{
      "id":"1233",
      "url":"https://m.media-amazon.com/images/I/91LH1HkH-xL._AC_UY218_.jpg",
      "title":"The Family Star",
      "price":"279",
      "year" : "2024 | Ages 13 and Older | CC",
      "Starring": "Vijay Deverakonda and Mrunal Thakur",
      "directedBy": "Parasuram"
    },
    {
      "id":"1234",
      "url":"https://m.media-amazon.com/images/I/91tukcJR8RL._AC_UY218_.jpg",
      "title":"The Idea of You",
      "price":"345",
      "year" : "2024 | Ages 16 and Older | CC",
      "Starring": "Anne Hathaway and Nicholas Galitzine",
      "directedBy": "Michael Showalter"
    },
    {
      "id":"1235",
      "url":"https://m.media-amazon.com/images/I/816r7vY0jRL._AC_UY218_.jpg",
      "title":"Operation Valentine (Hindi)",
      "price":"529",
      "year" : "2024 | Ages 13 and Older | CC",
      "Starring": "Varun Tej , Manushi Chhillar , Shataf Figar and Paresh Pahuja",
      "directedBy": "Shakti Pratap Singh Hada"
    },
    {
      "id":"1236",
      "url":"https://m.media-amazon.com/images/I/91alva4BXOL._AC_UY218_.jpg",
      "title":"Teri Baaton Mein Aisa Uljha Jiya",
      "price":"210",
      "year" : "2024 | Ages 13 and Older | CC",
      "Starring": "Shahid Kapoor , Kriti Sanon , Dharmendra and Dimple Kapadia",
      "directedBy": "Amit Joshi and Aradhana Sah"
    },
    {
      "id":"1237",
      "url":"https://m.media-amazon.com/images/I/91M3ysX3ltL._AC_UY218_.jpg",
      "title":"Romeo",
      "price":"399",
      "year" : "2024 | Ages 13 and Older | CC",
      "Starring": "Vijay Antony , Mirnalini Ravi , Yogi Babu and Ilavarasu",
      "directedBy": "Vinayak Vaithianathan"
    },
    {
      "id":"1238",
      "url":"https://m.media-amazon.com/images/I/91K4J7u-QeL._AC_UY218_.jpg",
      "title":"Dil Dosti Dilemma - Season 1",
      "price":"499",
      "year" : "2024 | Ages 13 and Older | CC",
      "Starring": "Anushka Sen , Kush Jotwani , Tanvi Azmi and Shishir Sharma",
      "directedBy": " Debbie Rao"
    },
    {
      "id":"1239",
      "url":"https://m.media-amazon.com/images/I/81pYumrDm+L._AC_UY218_.jpg",
      "title":"Kaagaz 2",
      "price":"509",
      "year" : "2024 | All Ages | CC",
      "Starring": "Anupam Kher , Darshan Kumaar , Satish Kaushik and Neena Gupta",
      "directedBy": "V.K. Prakash"
    },
    {
      "id":"12310",
      "url":"https://m.media-amazon.com/images/I/919Z3FnaeTL._AC_UY218_.jpg",
      "title":"Young Sheldon - Season 7",
      "price":"200",
      "year" : "2017 | Ages 13 and Older | CC",
      "Starring": "Iain Armitage , Zoe Perry , Lance Barber and Montana Jordan",
      "directedBy": "Alex Reid , Jaffar Mahmood , Michael Judd and Nikki Lorre"
    },
    {
      "id":"12311",
      "url":"https://m.media-amazon.com/images/I/810aGZ+wLiL._AC_UY218_.jpg",
      "title":"Young Sheldon - Season 6",
      "price":"119",
      "year" : "2023 | Ages 7 and Older | CC",
      "Starring": " Iain Armitage , Zoe Perry , Lance Barber and Montana Jordan",
      "directedBy": "Alex Reid , Jaffar Mahmood , Chris Koch and Howard Deutch"
    },
    {
      "id":"12312",
      "url": "https://m.media-amazon.com/images/I/81dNrCgVFoL._AC_UY218_.jpg",
      "title":"Young Sheldon - Season 5",
      "year":"2022 | Ages 7 and Older | CC",
      "Starring":"Iain Armitage , Zoe Perry , Lance Barber and Montana Jordan",
      "directedBy":"Alex Reid , Jaffar Mahmood , Chris Koch and Howard Deutch"
    },
    {
      "id":"12313",
      "url": "https://m.media-amazon.com/images/I/91xxv6rBu-L._AC_UY218_.jpg",
      "title":"Young Sheldon - Season 4",
      "year":"2021 | Ages 13 and Older | CC",
      "Starring":"Iain Armitage , Zoe Perry , Lance Barber and Montana Jordan",
      "directedBy":"Jon Favreau"
    },
    {
      "id":"12314",
      "url":"https://m.media-amazon.com/images/I/81RIqZ0k-SL._AC_UY218_.jpg",
      "title": "Young Sheldon - Season 3",
      "year":"2020 | Ages 13 and Older | CC",
      "Starring":"Iain Armitage , Zoe Perry , Lance Barber and Montana Jordan",
      "directedBy":"Jon Favreau"
    },
    {
      "id":"12315",
      "url": "https://m.media-amazon.com/images/I/81Z9s-lrgnL._AC_UY218_.jpg",
      "title":"Young Sheldon: Season 1",
      "year":"2017 | Ages 13 and Older | CC",
      "Starring":"Montana Jordan , Lance Barber , Raegan Revord , et al.",
      "directedBy":"Jon Favreau"
    },
    {
      "id":"12316",
      "url": "https://m.media-amazon.com/images/I/81-muOlF39L._AC_UY218_.jpg",
      "title":"Young Sheldon - Season 2",
      "year":"2019 | Ages 13 and Older | CC",
      "Starring":"Iain Armitage , Zoe Perry , Lance Barber and Montana Jordan",
      "directedBy":"Jon Favreau"
    }
    
  ];
  return (
    <div>
      {
        arr.map(card => {
          return (
            <div style={{
              display:"flex",
              gap:"20px",
              marginBottom:"20px"
            }}> 
            
            <img width="300px" height="300px" src = {card.url} alt={card.title}/>
            <div>
              <h3>{card.title}</h3>
              <p>{card.year}</p>
              <p>Rs.{card.price}</p> 
            </div>
            <div style={{
              gap:"20px"
            }}>
              <p><b>Starring : </b> {card.Starring}</p>
              <p><b>Directected By : </b> {card.directedBy}</p>
            </div>
           </div> 
          )
        })
      }
    </div>
  );
}

export default App;
