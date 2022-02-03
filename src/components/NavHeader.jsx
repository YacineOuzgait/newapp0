import { useState, useEffect } from "react";
import { Category } from "../models/category.model";
import { Gender } from "../models/gender.model";


export const Header = () => {
  const [genders, setGenders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = Gender.from(await (await fetch('./data/gender.json')).json());
      setGenders(data);
    }
    fetchData().catch(console.error);;
  }, []);

  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = Category.from(await (await fetch('./data/category.json')).json());
      setCategorys(data);
    }
    fetchData().catch(console.error);;
  }, [])



  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Zoolando</a>
        <i class="fab fa-drupal"></i>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {genders.map(gender => {
              return (
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">{gender.title}</a>
                </li>
              )
            })}
            <div class="btn-group" role="group">
              <button id="btnGroupDrop1" type="button" class="btn btn-black dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Catégories
              </button>
              <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              {categorys.map(category => {
              return (
                    <li><a class="dropdown-item" href="#">{category.title}</a></li>    
              )
            })}
              </ul>
            </div>
            
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Que chercher vous ?" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
      </div>
    </nav>
  )
}