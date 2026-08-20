import React from 'react'
import Script from 'next/script'

const help = () => {
  return (
    <div>
        <Script>{`alert("Welcome, what kind of help you want")`}</Script>
         kya help chaiya bata jaldi bhai,, panvel nikalna hai
    </div>
  )
}

export default help

export const metadata = {
  title: "any Help from FaceBook - Let's connect the world",
  description: "Connecting world by Facebook",
};
