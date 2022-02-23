const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const username = document.querySelector('.username')
const role = document.querySelector('.role')



const testimonials = [
    {
      name: 'Miyah Myles',
      position: 'Marketing',
      text:
        "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
      name: 'June Cha',
      position: 'Software Engineer',
      text:
        'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
    },
    {
      name: 'Iida Niskanen',
      position: 'Data Entry',
      text:
        "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
      name: 'Renee Sims',
      position: 'Receptionist',
      text:
        "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
      name: 'Jonathan Nunfiez',
      position: 'Graphic Designer',
      text:
        "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    },
   
  ]
  
  let idx = 1
  
  function updateTestimonial() {
    const { name, position, text } = testimonials[idx]
  
    testimonial.innerHTML = text
    username.innerHTML = name
    role.innerHTML = position
  
    idx++
  
    if (idx > testimonials.length - 1) {
      idx = 0
    }
  }
  
  setInterval(updateTestimonial, 7000)


  /* 回到頂部 */

let top1 = document.querySelector('.top1')

window.onscroll = function() {
    let height = document.documentElement.scrollTop ;
   
    if (height >= 300) {
        top1.style.display = 'block'
    }
    else {
        top1.style.display = 'none'

    }
}
top1.onclick = function (){
    window.scrollTo({
        top :0 ,
        behavior :"smooth"
    })
}