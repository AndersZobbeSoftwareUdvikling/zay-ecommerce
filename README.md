# Zay eCommerce

This is a demo project for Containerization & Linux elective at [UCL University College](https://ucl.dk)

The frontend is based on the following template:

* https://github.com/mosaadaldeen/zay-shop

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with thedk tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]





<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Docker]]
* [![Vue][Vue.js]][Vue-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To setup this project locally in a docker swarm you will need to have Docker installed Docker desktop can be downloaded from [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/).\
Unless you're adding the database to your swarm you will need an external database.

### Installation
Clone the repo
   ```sh
   git clone https://github.com/AndersZobbeSoftwareUdvikling/zay-ecommerce.git
   ```
#### For local docker swarm
1. If you want to have the database stored locally uncomment the section that configures the db service as well as the volume
3. In a text editor or IDE of choice configure the database variables in the `docker-compose.yml`.
   ```yml
      DB_PORT: 3306
      DB_HOSTNAME: "Your hostname (db by default)"
      DB_USERNAME: "Your username"
      DB_PASSWORD: "Your password"
      DB_DATABASE: "Your database name"
   ```
1. Locate the ``main.js`` file in the src directory of the frontend project and ensure the api configuration is set to
    ```js
    api: `http://${window.location.hostname}:3000`
    ```
    In the `index.js`in the backend root directory adjust the cors setting to be
    ```js
    app.use(cors());
    ```
4. In a CLI make sure you're in the root directory of the repository. Run the following commands
    ```pwsh
    docker-compose build
    docker swarm init #to initiate the docker swarm
    docker stack deploy -c docker-compose.yml <name of your stack>
    ```
5. Once your containers are running make sure to seed the database. This can be done from the backend container.\
You will need to find the id of the backend container with the command `"docker ps"` and locating the container in the list.\
First execute into the container with the command
    ```pwsh
    docker exec -it <container id> bash
    ```
    Within the conatiner run the following command
    ```bash
    npm run db:reset
    ```

#### For Kubelab Portainer
For this you will need an external MySql database.
1. Fork the repository
1. In a text editor or IDE of choice configure the database variables in the `docker-compose-portainer.yml`.
   ```yml
    DB_PORT: 3306
    DB_HOSTNAME: "Your hostname"
    DB_USERNAME: "Your username"
    DB_PASSWORD: ${DB_PASSWORD}
    DB_DATABASE: "Your database name"
   ```
   and in the same file you should change the image names
    ```yml
    image: <Your docker username>/<Your frontend image name>:latest
    ...
    image: <Your docker username>/<Your backend image name>:latest
    ```
1. Follow the kubelab guide to setting up a stack on the traefik-proxy network to ensure you've configured the deploy labels correctly.
1. Locate the ``main.js`` file in the src directory of the frontend project and ensure the api configuration is set to
    ```js
    api: `<Your api domain name>`
    ```
    In the `index.js`in the backend root directory adjust the cors setting to be
    ```js
    app.use(cors({
      origin: "<Your front end domain name>",
      optionsSuccessStatus: 200
    }));
    ```
1. In a CLI make sure you're in the root directory of the repository. Run the following commands
    ```pwsh
    docker-compose build -c docker-compose-portainer.yml
    docker push <Your docker username>/<Your frontend image name>
    docker push <Your docker username>/<Your backend image name>
    ```
1. Go to stacks in portainer and choose "Add stack". Provide a docker-compose file by either pasting it in the web editor or by referring to your forked repository
1. Set an environment variable in portainer to store your database password.
1. Deploy your stack!

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Anders Zobbe Mortensen - azmo63467@edu.ucl.dk



Project Link: [https://github.com/AndersZobbeSoftwareUdvikling/zay-ecommerce](https://github.com/AndersZobbeSoftwareUdvikling/zay-ecommerce)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AndersZobbeSoftwareUdvikling/zay-ecommerce.svg?style=for-the-badge
[contributors-url]: https://github.com/AndersZobbeSoftwareUdvikling/zay-ecommerce/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AndersZobbeSoftwareUdvikling/zay-ecommerce.svg?style=for-the-badge
[forks-url]: https://github.com/AndersZobbeSoftwareUdvikling/zay-ecommerce/network/members
[stars-shield]: https://img.shields.io/github/stars/AndersZobbeSoftwareUdvikling/zay-ecommerce.svg?style=for-the-badge
[stars-url]: https://github.com/AndersZobbeSoftwareUdvikling/zay-ecommerce/stargazers
[issues-shield]: https://img.shields.io/github/issues/AndersZobbeSoftwareUdvikling/zay-ecommerce.svg?style=for-the-badge
[issues-url]: https://github.com/AndersZobbeSoftwareUdvikling/zay-ecommerce/issues
[license-shield]: https://img.shields.io/github/license/AndersZobbeSoftwareUdvikling/zay-ecommerce.svg?style=for-the-badge
[license-url]: https://github.com/AndersZobbeSoftwareUdvikling/zay-ecommerce/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
