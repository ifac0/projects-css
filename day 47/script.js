const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Pedro",
    position: "Designer",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores rerum suscipit quas fuga delectus totam quo corrupti dicta. Aliquid repellendus harum eaque pariatur? Ipsa, iure pariatur? Aliquam molestiae culpa blanditiis quae debitis incidunt, fuga exercitationem ipsum quibusdam, tenetur unde, porro eos sed quia eveniet praesentium. Possimus cumque quidem illo!",
  },
  {
    name: "Maria",
    position: "Programadora",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores rerum suscipit quas fuga delectus totam quo corrupti dicta. Aliquid repellendus harum eaque pariatur? Ipsa, iure pariatur? Aliquam molestiae culpa blanditiis quae debitis incidunt, fuga exercitationem ipsum quibusdam, tenetur unde, porro eos sed quia eveniet praesentium. Possimus cumque quidem illo!",
  },
  {
    name: "João",
    position: "SEO",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores rerum suscipit quas fuga delectus totam quo corrupti dicta. Aliquid repellendus harum eaque pariatur? Ipsa, iure pariatur? Aliquam molestiae culpa blanditiis quae debitis incidunt, fuga exercitationem ipsum quibusdam, tenetur unde, porro eos sed quia eveniet praesentium. Possimus cumque quidem illo!",
  },
];

let idx = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  userName.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

updateTestimonial();
setInterval(updateTestimonial, 10000);
