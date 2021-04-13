const fs = require('fs')
const path = require('path')
const rimraf = require("rimraf")

const srcPath = path.dirname(__dirname)
const componentsPath = path.join(srcPath,'components')

const componentsArr = [
    'RoutesContainer',
    [
        '.jsx',
        '.module.scss'
    ]
]

class TemplateForCreateBasicLogic {
    constructor(arr =['TEST',['.jsx','.scss']],path=__dirname,func = () => ''){
        this.arr = arr
        this.path = path
        this.func = func
    }
    createComponentsLogic(){
        this.arr.forEach(e => {
            if(Array.isArray(e)){
                return
            }
            fs.mkdir(`${this.path}/${e}`,(err) => {})
               this.arr[this.arr.length-1].forEach(e2 => {
                   if(e2 === '.jsx'){
                    fs.stat(`${this.path}/${e}/${e}${e2}`, (err) => {  
                        if (err) {
                            fs.appendFile(`${this.path}/${e}/${e}${e2}`,
                            this.func(e) ||                 
                            `
import React from 'react'
import styles from './${e}.module.scss'

export const ${e} = () => {
    return (
        <div className={styles.root}>
            
        </div>
    )
}
                            `
                            ,(err) => {})
                        } else {
                            return
                        }
                    });
                    return
                   }
                fs.appendFile(`${this.path}/${e}/${e}${e2}`,'',(err) => {})
            })
        })
    }
    removeComponentsLogic(){
        this.arr.forEach(e => {
            if(Array.isArray(e)){
                return
            }
            rimraf(`${this.path}/${e}`,(err) => {})
        })
    }
}

const CustomTemplateCreator = (e) => {
    return( 
    `
<div>
    <img src="" alt=""/>
</div>
    `
    )
}

let createComponents = new TemplateForCreateBasicLogic(componentsArr,componentsPath)

createComponents.createComponentsLogic()
