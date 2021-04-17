import login from '../assets/icons/login.svg'
import register from '../assets/icons/register.svg'
import computer from '../assets/icons/computer.svg'
import arrows from '../assets/icons/arrows.svg'
import account from '../assets/icons/userAccount.svg'
import bottomArrow from '../assets/icons/bottomArrow.svg'

import bg from '../assets/pictures/bg.png'
import image_1 from '../assets/pictures/image_1.jpg'
import image_2 from '../assets/pictures/image_2.jpg'
import image_3 from '../assets/pictures/image_3.jpg'
import image_4 from '../assets/pictures/image_4.jpg'
import showcase from '../assets/pictures/showcase.jpg'


export const icons:IIcons = {
    login,
    register,
    computer,
    arrows,
    account,
    bottomArrow,
}

export const pictures:IPictures = {
    bg,
    image_1,
    image_2,
    image_3,
    image_4,
    showcase
}

interface IIcons {
    login:string,
    register:string,
    computer:string,
    arrows:string,
    account:string,
    bottomArrow:string,
}

interface IPictures {
    bg:string,
    image_1:string,
    image_2:string,
    image_3:string,
    image_4:string,
    showcase:string
}