const classes = [
    "Jaringan Komputer",
    "Pemrograman Berbasis Kerangka Kerja",
    "Rekayasa Sistem Berbasis Pengetahuan",
    "Pemodelan dan Simulasi",
    "Pemrograman Web",
    "Grafika Komputer",
    "Teori Graf"
];

const classList = document.getElementById("classList");

classes.forEach(class_ => {
    var option = document.createElement("option");
    option.value = class_;
    classList.appendChild(option)
});

const lecturers = {
    "Jaringan Komputer" : ["Ary Mazharuddin", "Wahyu Suadi", "Radityo Anggoro", "Supeno Djanali"],
    "Pemrograman Berbasis Kerangka Kerja" : ["Fajar Baskoro", "Abdul Munif"],
    "Rekayasa Sistem Berbasis Pengetahuan" : ["Shintami", "Riyanarto Sarno"],
    "Pemodelan dan Simulasi" : ["Joko Lianto", "Ahmad Saikhu"],
    "Pemrograman Web" : ["Fajar Baskoro", "Siska Arifiani"],
    "Grafika Komputer" : ["Hadziq Fabroyir", "Siska Arifiani"],
    "Teori Graf" : ["Victor Hariadi"]
}

const lecturerList = document.getElementById('Dosen');
const currClass = document.getElementById("Class");

currClass.addEventListener('input', () => {
    const valueClass = currClass.value;
    const detailLecturer = lecturers[valueClass] || [];

   
    lecturerList.innerHTML = "";
    
    detailLecturer.forEach(lecturer => {
        const option = document.createElement("option");
        option.value = lecturer;
        option.text = lecturer;
        lecturerList.appendChild(option);
    })
});

const provinces = ["Jawa Timur", "Jawa Barat"];

const provinceList = document.getElementById("provinceList");

provinces.forEach(province => {
    var option = document.createElement("option");
    option.value = province;
    provinceList.appendChild(option)
});

const cities = {
    "Jawa Timur" : ["Surabaya", "Sidoarjo", "Malang"],
    "Jawa Barat" : ["Depok", "Bandung", "Bogor"],
}

const cityList = document.getElementById('City');
const currProvince = document.getElementById("Province");

currProvince.addEventListener('input', () => {
    const valueProvince = currProvince.value;
    const detailCity = cities[valueProvince] || [];

    cityList.innerHTML = "";
    
    detailCity.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        cityList.appendChild(option);
    })
    
});

const zipcodes = {
    'Bandung': ['40111', '40112', '40113'],
    'Bogor': ['16110', '16111', '16112'],
    'Depok': ['16415', '16416', '16417'],
    'Surabaya': ['60111', '60112', '60113'],
    'Malang': ['65111', '65112', '65113'],
    'Sidoarjo': ['61252', '61253', '61254']
  };

  const zipcodeList = document.getElementById('Zipcode');
  const currCity = document.getElementById("City");
  
  currCity.addEventListener('click', () => {
      const valueCity = currCity.value;
      const detailZip = zipcodes[valueCity] || [];
  
      zipcodeList.innerHTML = "";
      
      detailZip.forEach(zip => {
          const option = document.createElement("option");
          option.value = zip;
          option.text = zip;
          zipcodeList.appendChild(option);
      })
  });
  
function validateZip(){
    const province = document.getElementById("Province");
    const city = document.getElementById("City");
    const zipcode = document.getElementById("Zipcode");

    if (province.value == "" || city.value == "" || zipcode.value == ""){
        document.getElementById("details").value = "Please fill all the required data";
    } 
    else {
        document.getElementById("details").value = "You live in " + city.value + ", " + province.value + ". With " + zipcode.value + " zipcode";
    }
    
    
}
function validateForm(){
    const name = document.forms["form1"]["Name"].value;
    const nrp = document.forms["form1"]["NRP"].value;
    const chosenClass = document.forms["form1"]["Class"].value;
    const chosenLecturer = document.forms["form1"]["Dosen"].value;

    if (name == "" || nrp == "" || chosenClass == "" || chosenLecturer == ""){
        alert("Please fill all the required data");
    } else if (!classes.includes(chosenClass)){
        alert("Please choose a valid class");
    }
    else {
        alert("Registered to class " + chosenClass + " : " + chosenLecturer);
    }

    
}