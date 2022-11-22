import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Project from './Components/Project';
import image from './images/image.png';
import image_1 from './images/image(1).png';
import image_3 from './images/image(3).png';
import image_2 from './images/image(2).png';
import image_4 from './images/image(4).png';
import icon from "./images/icon.png";
import said from './images/said.png';
import zubayr from './images/zubayr.png';
import abdurahmon from './images/Abdurahmon.png';
import ubayda from './images/ubayda.png';
import sad from './images/sad.png';
import close from './images/close.png';

const App = () => {
  return (
    <div>
      <Navbar img={icon} img2={close} />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Project
                img_style="bad"
                style1="data"
                img={image}
                name="Umar Ibn Hattob"
                year="584-yil — 644-yil"
                info1="Sahobalarning eng oliysi"
                info2="Dindagi eng shiddatlisi"
                info3="Ummatning ilhomlangani"
              />
            }
          />
          <Route
            path='ali'
            element={
              <Project
                style1="ohno"
                style2="noho"
                img_style="bad"
                img={image_3}
                name="Ali ibn Abu Tolib"
                year="600-yil - 661-yil"
                info1="Hukmda eng bilimdoni"
                info2="Tunlari rohib"
                info3="Kunduzlari rozador"
              />
            }
          />
          <Route
            path='abubakr'
            element={
              <Project
                img_style="bad"
                style1="ohnoh"
                style2="noho"
                img={image_1}
                name="Abu Bakr r.a."
                year="534-yil — 634-yil"
                info1="Islomni 1 qabul qilgan"
                info2="Siddiq unvoni bilan tanilgan"
                info3="Paygambar
                imizning eng yaqin hamrohi"
              />
            }
          />
          <Route
            path='usmon'
            element={
              <Project
                img_style="not_bad"
                style1="ohnoh"
                img={image_2}
                name="Usmon ibn Affon"
                year="574-yil — 656-yil"
                info1="Quronni jamlagan"
                info2="Tunlari bilan ibodat qilgan"
                info3="Ummatni adolatga buyurgan"
              />
            }
          />
          <Route
            path='ubaydulloh'
            element={
              <Project
                img_style="not_bad"
                style1="ohnoh"
                img={image_4}
                name="Talha ibn Ubaydulloh"
                year="595-yil — 656-yil"
                info1="Uhud jangida Paygambarimizni himoya qilgan"
                info2="Birinchi xalifa"
                info3="Tuya jangida halok bolgan"
              />
            }
          />
          <Route
            path='said'
            element={
              <Project
                img_style="not_bad"
                style1="ohnoh"
                img={said}
                name="Said ibn Zayd"
                year="593-yil — 673-yil"
                info1="Eng ulug sahobalar
                dan biri"
                info2="jasorotlari bilan mashhur bo'lgan"
                info3="Kop janglarda qatnashgan"
              />
            }
          />
          <Route
            path='zubayr'
            element={
              <Project
                img_style="not_bad"
                style1="ohno"
                img={zubayr}
                name="Zubayr ibn Avvom"
                year="? — 656-yil"
                info1="Paygambar
                imizning havoliysi"
                info2="Amakilari kop qiynashgan"
                info3="Rasulullohni hamrohi bolgan"
              />
            }
          />
          <Route
            path='sad'
            element={
              <Project
                img_style="not_bad"
                style1="ohno"
                img={sad}
                name="Sa'd ibn Abu Vakkos"
                year="595-yil — 674-yil"
                info1="Paygambar
                imizning togasi"
                info2="Changali zo`r arslon"
                info3="Mohir lashkarni qomondoni"
              />
            }
          />
          <Route
            path='abdurahmon'
            element={
              <Project
                img_style="not_bad"
                style1="ohnoh"
                img={abdurahmon}
                name="Abdurahmon ibn Avf"
                year="579-yil — 654-yil"
                info1="Badr va Uhud jangida Qatnashgan"
                info2="Tijorat orqali boyib ketgan"
                info3="Xayr-ehsonni kop qilgan"
              />
            }
          />
          <Route
            path='ubayda'
            element={
              <Project
                img_style="not_bad"
                style1="ohnoh"
                img={ubayda}
                name="Abu Ubayda ibn Jarroh"
                year="583-yil — 639-yil"
                info1="Shijoatli va oʻta jasur"
                info2="Odil, shavqatli, halim boʻlgan"
                info3="Kop gʻazotlarda qatnashgan"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
