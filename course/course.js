const ctx = document.getElementById("myChart").getContext("2d");
let c = 0;
let result;
 let result2;

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58,123,213,1)");
gradient.addColorStop(1, "rgba(0,210,255,0.3)");

const labels = ["Mar2", "Mar3", "Mar4", "Mar5", "Mar6", "Mar7"];

const data = {
  labels,
  datasets: [
    {
      data: [200, 311, 231, 355, 326, 400],
      label: "",
      fill: true,
      backgroundColor: gradient,
      pointBckgroundColor: "#000",
      tension: 0.4,
    },
  ],
};

const config = {
  radius: 5,
  hoverRadius: 18,
  type: "line",
  data: data,
  options: {
    responsive: true,
  },
};

const myChart = new Chart(ctx, config);
//end chart

//array of objects
let courses = [
  {
    name: "3D Interface Design",
    rate: 4.5,
    category: "Design",
    Earning: 12.00,
    sale: 0,
    visitor: 12.22,
    image:
      "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png",
  },
  {
    name: "3D Interface Design",
    rate: 4.5,
    category: "Design",
    Earning: 100,
    sale: 0,
    visitor: 12.22,
    image:
      "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png",
  },
  {
    name: "3D Interface Design",
    rate: 4.5,
    category: "Design",
    sale: 20,
    Earning: 120,
    visitor: 12.22,
    image:
      "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png",
  },
];

//------------------total-----------------
totalDom();
courseDom();
WeeklySales(); 

function totalDom() {
  const mainPage = document.querySelector(".main");

  let Totalcontainer = document.createElement("div");
  Totalcontainer.classList.add("Totalcontainer");
  mainPage.appendChild(Totalcontainer);

  let container = document.createElement("div");
  container.classList.add("head-page");
  Totalcontainer.appendChild(container);

  let totalRevenue = document.createElement("h4");
  totalRevenue.classList.add("totalRevenue");
  container.appendChild(totalRevenue);
  totalRevenue.textContent = "Total Revenue";

  let space1 = document.createElement("div");
  space1.classList.add("space");
  container.appendChild(space1);

  let totalRevenuePrice = document.createElement("h4");
  totalRevenuePrice.classList.add("totalRevenuePrice");
  totalRevenue.appendChild(totalRevenuePrice);
  for (let i = 0; i < courses.length; i++){
    c += courses[i].visitor;
   const str_a = c.toString();
   result = Number(str_a.slice(0, 5));
  }  
  totalRevenuePrice.textContent = result;

  let totalRevenueImage = document.createElement("img");
  totalRevenueImage.classList.add("totalRevenueImage");
  container.appendChild(totalRevenueImage);
  totalRevenueImage.setAttribute(
    "src",
    "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png"
  );

  let Avaragecontainer = document.createElement("div");
  Avaragecontainer.classList.add("head-page");
  Totalcontainer.appendChild(Avaragecontainer);

  let AvarageRate = document.createElement("h4");
  AvarageRate.classList.add("totalRevenue");
  Avaragecontainer.appendChild(AvarageRate);
  AvarageRate.textContent = "Avarage Rate";

  let space = document.createElement("div");
  space.classList.add("space");
  Avaragecontainer.appendChild(space);

  let AvarageRatePrice = document.createElement("h4");
  AvarageRatePrice.classList.add("totalRevenuePrice");
  AvarageRate.appendChild(AvarageRatePrice);
    for (let i = 0; i < courses.length; i++) {
      c += courses[i].rate;
      const str_a = c.toString();
      result = Number(str_a.slice(0, 3));
  }  
  var x = result / (courses.length);
  const str_a = x.toString();
  result2 = Number(str_a.slice(0, 3));
  AvarageRatePrice.textContent = result2+"%";

  let AvarageRateImage = document.createElement("img");
  AvarageRateImage.classList.add("totalRevenueImage");
  Avaragecontainer.appendChild(AvarageRateImage);
  AvarageRateImage.setAttribute(
    "src",
    "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png"
  );


    let TotalStudentcontainer = document.createElement("div");
  TotalStudentcontainer.classList.add("head-page");
  Totalcontainer.appendChild(TotalStudentcontainer);

  let TotalStudent = document.createElement("h4");
  TotalStudent.classList.add("totalRevenue");
  TotalStudentcontainer.appendChild(TotalStudent);
  TotalStudent.textContent = "TotalStudent";

  let space2 = document.createElement("div");
  space2.classList.add("space");
  TotalStudentcontainer.appendChild(space2);

  let StudentCount = document.createElement("h4");
  StudentCount.classList.add("totalRevenuePrice");
  TotalStudent.appendChild(StudentCount);
  StudentCount.textContent = courses.length;

  let StudentImage = document.createElement("img");
  StudentImage.classList.add("totalRevenueImage");
  TotalStudentcontainer.appendChild(StudentImage);
  StudentImage.setAttribute(
    "src",
    "https://uploads-ssl.webflow.com/6166f095fa264878624ae673/6179a29848955b844e6eedff_vectary-3d-design-og%20(1).png"
  );
}

function courseDom() {
  let Course = document.querySelector(".mainCourse");

  let Title = document.createElement("label");
  Title.classList.add("Title");
  Course.appendChild(Title);
  Title.textContent = `Name`;

  let Category = document.createElement("label");
  Category.classList.add("Category");
  Course.appendChild(Category);
  Category.textContent = `Category`;

  let Sale = document.createElement("label");
  Sale.classList.add("Sale");
  Course.appendChild(Sale);
  Sale.textContent = `Sale`;

  let Rate = document.createElement("label");
  Rate.classList.add("Rate");
  Course.appendChild(Rate);
  Rate.textContent = `Rate`;

  let Earning = document.createElement("label");
  Earning.classList.add("Earning");
  Course.appendChild(Earning);
  Earning.textContent = `Earning`;

  let Visitor = document.createElement("label");
  Visitor.classList.add("Visitor");
  Course.appendChild(Visitor);
  Visitor.textContent = `Visitor`;

  let div = document.createElement("div");
  div.classList.add("div");
  Course.appendChild(div);

  for (let i = 0; i < courses.length; i++) {
    let div = document.createElement("div");
    div.classList.add("div");
    Course.appendChild(div);

    let courseImg = document.createElement("img");
    courseImg.classList.add("courseImage");
    Course.appendChild(courseImg);
    courseImg.setAttribute("src", `${courses[i].image}`);

    let courseTitle = document.createElement("label");
    courseTitle.classList.add("courseTitle");
    Course.appendChild(courseTitle);
    courseTitle.textContent = `${courses[i].name}`;

    let courseCategory = document.createElement("label");
    courseCategory.classList.add("courseCategory");
    Course.appendChild(courseCategory);
    courseCategory.textContent = `${courses[i].category}`;

    let courseSale = document.createElement("label");
    courseSale.classList.add("courseSale");
    Course.appendChild(courseSale);
    courseSale.textContent = `${courses[i].sale}`;

    let courseRate = document.createElement("label");
    courseRate.classList.add("courseRate");
    Course.appendChild(courseRate);
    courseRate.textContent = `${courses[i].rate}`;

    let courseEarning = document.createElement("label");
    courseEarning.classList.add("courseEarning");
    courseEarning.textContent = `${courses[i].Earning + "$"}`;
    Course.appendChild(courseEarning);

    let courseVisitor = document.createElement("label");
    courseVisitor.classList.add("courseVisitor");
    Course.appendChild(courseVisitor);
    courseVisitor.textContent = `${courses[i].visitor}`;
  }
}

function WeeklySales() {
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].sale != 0) {
     Dom2();
    }
  }
}

function Dom2() {
  let Course = document.querySelector(".WeeklySales");

  let Title = document.createElement("label");
  Title.classList.add("title1");
  Course.appendChild(Title);
  Title.textContent = `Course`;

  let Sale = document.createElement("label");
  Sale.classList.add("sale1");
  Course.appendChild(Sale);
  Sale.textContent = `Sale`;

  let Earning = document.createElement("label");
  Earning.classList.add("earning1");
  Course.appendChild(Earning);
  Earning.textContent = `Earning`;

  let div = document.createElement("div");
  div.classList.add("div");
  Course.appendChild(div);

  for (let i = 0; i < courses.length; i++) {
    let div = document.createElement("div");
    div.classList.add("div");
    Course.appendChild(div);

    let courseImg = document.createElement("img");
    courseImg.classList.add("courseImage");
    Course.appendChild(courseImg);
    courseImg.setAttribute("src", `${courses[i].image}`);

    let courseTitle = document.createElement("label");
    courseTitle.classList.add("title");
    Course.appendChild(courseTitle);
    courseTitle.textContent = `${courses[i].name}`;

    let courseSale = document.createElement("label");
    courseSale.classList.add("sale");
    Course.appendChild(courseSale);
    courseSale.textContent = `${courses[i].sale}`;


    let courseEarning = document.createElement("label");
    courseEarning.classList.add("earning");
    courseEarning.textContent = `${courses[i].Earning + "$"}`;
    Course.appendChild(courseEarning);

  }
}
//var len= arr.length;
//لما اجيب عدد الكورسات