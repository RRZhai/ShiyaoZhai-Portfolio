import React from "react";
import "./skill.css";

const Skill = () => {
  return (
    <section className="skill section">
        <h1 className="title">Skills</h1>
      <div className="all_skills">
        <div className="skill_container container">
          <p className="subtitle">Frontend</p>
          <ul className="skill_list grid">
            <li className="skill_item">
              <svg
                className="skill_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="2500"
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 256 256"
                id="javascript"
              >
                <path fill="#F7DF1E" d="M0 0h256v256H0V0z"></path>
                <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path>
              </svg>
              JavaScript
            </li>
            <li className="skill_item">
              <svg
                className="skill_icon"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 128 128"
                viewBox="0 0 128 128"
                id="react"
              >
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4"></circle>
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                </g>
              </svg>
              React
            </li>
            <li className="skill_item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                id="html5"
                className="skill_icon"
              >
                <path
                  fill="#E44D26"
                  d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"
                ></path>
                <path
                  fill="#F16529"
                  d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"
                ></path>
                <path
                  fill="#EBEBEB"
                  d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"
                ></path>
                <path
                  fill="#fff"
                  d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                ></path>
              </svg>
              HTML
            </li>
            <li className="skill_item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                id="css3"
                className="skill_icon"
              >
                <path
                  fill="#1572B6"
                  d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"
                ></path>
              </svg>
              CSS
            </li>
            <li className="skill_item">
              <svg
                className="skill_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="2500"
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 256 256"
                id="json"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="15.791%"
                    x2="91.009%"
                    y1="14.737%"
                    y2="85.228%"
                  >
                    <stop offset="0%"></stop>
                    <stop offset="100%" stop-color="#FFF"></stop>
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="82.136%"
                    x2="-3.113%"
                    y1="85.237%"
                    y2="14.79%"
                  >
                    <stop offset="0%"></stop>
                    <stop offset="100%" stop-color="#FFF"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#a)"
                  d="M127.783 190.56c56.637 77.208 112.064-21.55 111.982-80.94C239.67 39.404 168.5.16 127.737.16 62.309.159 0 54.232 0 128.216 0 210.45 71.425 256 127.737 256c-12.743-1.835-55.21-10.934-55.78-108.747-.385-66.154 21.58-92.585 55.688-80.958.764.283 37.622 14.823 37.622 62.32 0 47.296-37.484 61.944-37.484 61.944z"
                ></path>
                <path
                  fill="url(#b)"
                  d="M127.717 66.241c-37.424-12.899-83.269 17.946-83.269 79.726C44.448 246.844 119.201 256 128.263 256 193.691 256 256 201.926 256 127.943 256 45.709 184.575.159 128.263.159c15.597-2.16 84.065 16.88 84.065 110.458 0 61.026-51.124 94.248-84.376 80.054-.764-.283-37.623-14.823-37.623-62.32 0-47.297 37.388-62.11 37.388-62.11z"
                ></path>
              </svg>
              JSON
            </li>
          </ul>
        </div>
        <div className="skill_container container">
          <p className="subtitle">Backend</p>
          <ul className="skill_list grid">
            <li className="skill_item">
              <svg
                className="skill_icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="python"
              >
                <path d="M18.231 7.357h.001v-.004z"></path>
                <path
                  fill="#F2BB30"
                  d="M20.699 17.748c1.666 0 2.282-1.162 2.861-2.904.6-1.794.574-3.52 0-5.818-.413-1.655-1.194-2.904-2.861-2.904h-2.147v2.541c0 1.971-1.672 3.632-3.578 3.632H9.252c-1.565 0-2.861 1.339-2.861 2.909v5.454c0 1.553 1.35 2.464 2.861 2.909 1.81.53 3.552.626 5.721 0 1.441-.418 2.861-1.26 2.861-2.909v-2.181h-5.717v-.728h8.582zm-5.367 2.181c.594 0 1.077.488 1.077 1.088 0 .606-.482 1.093-1.077 1.093a1.09 1.09 0 0 1-1.077-1.093 1.088 1.088 0 0 1 1.077-1.088z"
                ></path>
                <path
                  fill="#35668F"
                  d="M3.444 17.749H5.41v-2.615c0-1.891 1.634-3.558 3.578-3.558h5.721c1.591 0 2.861-1.312 2.861-2.909V3.209c0-1.553-1.307-2.717-2.861-2.978-1.918-.317-4.002-.299-5.721.006l.001-.001c-2.422.428-2.86 1.322-2.86 2.977v2.181h5.727v.729H3.98C2.314 6.123.856 7.125.402 9.027c-.525 2.181-.546 3.541 0 5.818.406 1.693 1.377 2.904 3.042 2.904zM8.63 3.937a1.084 1.084 0 0 1-1.077-1.088A1.089 1.089 0 0 1 8.63 1.756c.59 0 1.077.492 1.077 1.093S9.225 3.937 8.63 3.937z"
                ></path>
              </svg>
              Python
            </li>
            <li className="skill_item">
              <svg
                className="skill_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1945"
                height="2500"
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 256 329"
                id="flask"
              >
                <path d="M76.501 203.351c-9.75-7.67-20.153-15.02-27.26-25.377-14.961-18.264-26.477-39.405-34.35-61.625-4.76-14.45-6.39-29.941-12.53-43.83-6.414-10.091 1.105-21.114 12.157-24.32 4.917-.948 13.568-5.59 3.125-2.268-9.364 6.866-10.266-6.24-.666-7.07 6.552-.869 8.964-6.23 6.721-11.056-7.036-4.59 17.055-9.626 4.932-16.473-12.62-13.62 17.66-16.242 10.188-.771-1.786 11.895 21.166-2.185 15.836 11.554 5.415 6.599 20.272 1.505 19.899 10.757 7.886.542 10.593 7.173 17.988 7.683 7.677 3.466 21.58 6.192 24.188 14.837-7.61 6.023-25.227-12.443-26.078 4.232 2.302 24.638 1.715 50.017 10.726 73.478 4.262 14.204 14.6 25.385 23.931 36.45 8.933 10.834 21.03 18.466 33.363 24.887 10.815 5.1 22.475 8.48 34.265 10.606 4.78-3.656 13.221-17.25 20.675-11.522.36 6.449-14.796 13.471-.711 12.758 8.278-2.498 14.013 6.394 20.826-1.629 6.278 7.436 26.09-4.747 21.625 10.45-6.042 3.898-14.85 1.543-20.898 6.906-9.972-4.983-17.912 4.453-28.956 3.263-12.26 2.196-24.738 3.08-37.167 3.098-20.396-1.609-41.222-2.288-60.624-9.39-10.933-3.176-21.598-9.402-31.205-15.628zm17.224 7.468c10.672 4.61 21.109 9.475 32.807 10.946 18.558 2.577 37.723 6.552 56.346 2.93-8.428-3.805-17.145 1.478-25.541-2.72-10.07 2.164-20.878-.556-31.12-1.897-11.64-5.184-24.206-8.748-35.107-15.485-13.628-4.975 7.043 6.383 10.724 7.306 8.514 4.83-9.365-2.48-11.89-4.487-7.132-4.002-8.04-3.165-.704.896 1.477.864 2.936 1.773 4.485 2.511zm-20.31-14.353c10.345 3.832-.046-7.272-4.78-6.63-2.1-3.643-8.023-5.945-3.845-7.9-7.513 2.61-7.873-9.92-11.403-8.127-7.952-2.511-3.094-11.405-12.569-16.87-.864-5.756-9.41-10.745-12.13-19.423-1.203-4.446-9.658-17.203-4.466-5.33 4.42 11.43 12.195 21.227 18.669 31.003 5.022 9.31 10.96 19.048 20.108 24.855 3.087 2.962 6.061 7.493 10.415 8.422zm-29.791-32.715c.358-1.563 1.89 3.38 0 0zm42.183 37.305c2.288-1.026-3.296-1.294 0 0zm5.61 2.048c-.581-2.826-2.563 1.582 0 0zm7.03 2.93c3.341-3.187-5.16-2.01 0 0zm12.045 6.713c2.033-3.001-6.507-1.13 0 0zm-23.128-16.123c5.19-3.362-6.716-.047 0 0zm5.27 2.628c-.151-1.773-1.877.797 0 0zm26.345 16.445c4.237 2.675 24.738 5.859 11.902 1.098-2.153.452-23.803-6.127-11.902-1.098zM77.156 183.12c-.412-1.777-6.58-1.968 0 0zm12.26 7.155c3.197-2.23-6.624-1.72 0 0zm10.318 6.323c4.584-1.726-7.427-1.733 0 0zM72.16 177.686c4.97 3.811 20.05.49 7.611-2.275-5.656-3.015-18.407-5.08-9.715 1.818l2.104.457zm34.566 21.095c2.072-3.525-8.685-2.015 0 0zm-10.503-8.345c12.15 3.434-10.22-7.69-3-1.268l1.603.726 1.397.542zm21.058 12.17c11.508.11-10.398-1.588 0 0zm-49.547-31.578c-.452-2.144-2.838.178 0 0zm69.013 42.498c.307-3.87-3.754 2.884 0 0zm-49.37-30.472c-.7-2.04-3.596-.085 0 0zm-18.552-13.372c6.606-.398-9.05-2.91 0 0zm-21.978-14.204c-.823-3.17-7.186-5.694 0 0zm57.695 36.614c-1.21-1.381-.57.3 0 0zm35.905 22.037c-.11-2.113-1.955.796 0 0zm-39.083-25.32c.648-2.72-5.636-.825 0 0zm-26.752-16.956c4.918-.524-7.88-3.322 0 0zm45.252 28.119c7.663-3.035-7.468-1.479 0 0zm-23.535-15.975c8.827 1.136-10.508-6.01-1.942-.642l1.942.642zm30.68 18.864c8.247-4.923 5.527 11.542 13.989 1.393 8.343-6.094-7.207 7.533 3.073 1.086 7.441-4.977 18.426 2.36 25.365 4.747 4.988-.242 9.841 4.316 14.96 1.542 9.848-2.655-19.263-3.935-11.633-8.638-9.01 2.624-15.666-3.125-20.1-8.899-10.11-2.335-21.795-7.5-26.843-16.452-2.06-3.354 2.97.478-1.778-5.015-6.088-5.415-9.128-11.569-13.216-18.153-4.885-2.603-5.46-10.273-5.951-.254.04-6.324-5.898-10.581-7.35-8.815-.026-6.089 6.357-3.035 1.89-7.54-.96-6.311-4.126-12.888-5.075-20.016-1.476-3.433-.21-10.789-5.047-3.015-1.76 8.22-.582-10.096 2.158-4.06 3.596-6.16-1.296-5.435-1.492-4.584 2.342-5.198 1.485-12.575-.614-9.763 1.249-5.513 1.975-20.284-1.863-17.662 2.327-5.767 4.414-26.38-5.697-18.518-4.093.058-11.187 1.485-14.535 3.152 10.508 5.794-1.06 2.092-5.343 1.17-.556 5.362-4.793 3.047-10.09 3.099 8.462 1.046-4.12 8.65-8.964 5.696-6.304 3.008 5.434 10.528.124 12.855.655 3.499-9.652-1.267-8.847 6.828-6.115-2.578-.837 9.599 2.223 5.48 10.404 2.818 7.324 9.233 7.585 15.333-1.694 3.55-8.37-8.35-1.485-7.8-5.434-8.823-6.008-3.192-10.521.908-1.046.295 11.509 5.832 3.63 8.566 6.931 1.073 7.134 7.141 8.547 10.98 4.165 4.34 3.307-4.795 8.298.425-3.16-4.65-16.715-13.1-5.8-10.39-.06-4.676-1.976-8.45 1.372-8.359 3.316-5.996-3.472 14.792 3.996 7.168 2.065-.902 2.583-6.003 6.297.484 5.394 5.31 1.949 9.153-5.663 4.289 1.36 4.623 10.181 6.27 8.52 13.497 1.758 6.356 4.218 4.014 6.362 3.648 1.68 6.173 2.637 1.635 2.715-1.308 7.696 1.65 5.891 6.2 8.303 9.378 5.303 2.392-7.591-16.224 1.512-5.598 9.578 8.651 3.596 12.26-5.002 10.875 5.44-.44 7.191 7.357 14 7.082 6.205 2.955 10.41 14.294-.288 9.572-3.708-3.348-16.846-7.474-6.114-1.111 9.9 4.59 17.773 7.33 27.326 13.092 6.834 4.878 9.788 10.467 12.378 11.574-5.747 2.745-17.314-2.191-8.723-3.701-5.362-.975-11.39-3.688-6.258 2.988 4.368 3.649 15.465 3.262 17.46 3.674-1.687 3.715-4.583 4.01.065 4.297-5.186 2.766 1.668 3.198 2.145 4.773zm-10.606-29.955c-3.158-3.302-3.975-9.481-.562-4.108 1.753.707 5.605 10.105.562 4.108zm34.547 21.945c1.968-.13.058 1.496 0 0zm-39.528-30.04c-.126-4.99 1.136 3.85 0 0zm-3.434-4.617c-3.975-7.67 5.002 2.171 0 0zm-41.615-28.719c2.335-.623 1.151 3.987 0 0zm33.121 17.949c1.432-5.382 1.681 4.513 0 0zm-23.397-16.27c-1.647-2.968 3.447 2.787 0 0zm20.075 6.435c-3.76-8.422 2.668-4.604.837 1.38l-.837-1.38zm-34.624-23.09c-1.68-2.765-4.46-10.874-3.564-13.351.804 4.034 8.573 17.354 3.805 5.519-5.263-9.92 6.298 3.216 7.488 5.695.556 2.459-3.25-.673-.674 5.1-4.701-6.572-2.773 3.63-7.055-2.963zm-10.698-7.375c.438-6.428 2.446 4.407 0 0zm4.813 1.66c2.295-4.85 3.89 6.762 0 0zm-11.581-8.957c-3.983-3.964-6.867-7.612.189-2.46 2.714.105-6.041-8.297.655-2.668 7.035 1.283 3.471 11.543-.844 5.128zm6.081-.157c2.316-2.295 1.23 2.256 0 0zm3.747 1.196c-3.512-6.572 4.257 2.76 0 0zm-7.441-7.107c-11.58-10.314 14.549 5.387 1.89 1.908l-1.89-1.908zm33.185 19.276c-5.015-3.002-1.334-21.153.38-8.742 4.872-1.577-.27 6.415 3.36 6.336-.568 5.04-2.196 6.854-3.74 2.406zm12.274 7.258c.49-5.472 1.033 3.742 0 0zm-2.131-2.112c.549-2.334.052 2.753 0 0zm-41.06-27.81c-7.44-10.267 21.625 10.383 4.768 2.603-1.76-.464-3.884-.628-4.768-2.603zm23.639 12.53c-.705-8.645 1.57 1.43 0 0zm17.943 11.513c1.386-4.923.106 3.258 0 0zm-40.437-27.96c4.421-.948 18.322 7.762 5.558 2.485-1.418-1.57-4.446-.857-5.558-2.486zm37.971 18.924c.473-8.84 2.644-5.277.02 1.269l-.02-1.27zM53.171 85.375c1.804-2.643-4.788-11.947.947-3.336 2.48 1.968 7.173 3.296 3.028 4.126 6.519 5.749-1.588 1.557-3.975-.79zm32.805 19.244c1.244-10.07 1.1 5.898 0 0zM49.404 76.076c1.38-.59.732 1.836 0 0zm8.56 5.094c2.202-4.624 4.06 5.152 0 0zm24.135 13.424c-.02-1.772.457 2.583 0 0zm-1.4-3.092c-3.348-8.266 3.12 4.374 0 0zm-2.054-5.422c-.56-3.414 1.91 4.29 0 0zm3.348-5.44c-2.301-4.049 2.905-17.852 3.487-9.292-2.427 6.67-.7 10.398.986 1.452 3.127-7.036-.673 13.896-4.473 7.84zm3.44-20.526c1.002-1.23.223 1.483 0 0zm-5.746 113.21c-1.361-1.19.175.753 0 0zm11.835 5.984c6.584 1.694 6.552-1.021.6-1.832-3.197-2.974-13.3-6.133-4.256-.366.596 1.518 2.486 1.478 3.656 2.198zm-23.37-15.525c3.622 2.709 13.659 7.664 5.165 1.035 2.864-3.33-5.48-5.101-2.713-7.33-7.043-4.311-5.56-3.925-.621-3.787-8.462-3.787 1.222-3.499.765-5.44-3.263-.642-16.211-5.756-8.593.418-7.742-3.944-1.845 1.471-4.185.902-7.92-2.158 7.05 6.03-1.256 3.996 4.539 3.596 12.222 9.22 1.916 3.805-1.353 1.955 7.377 4.918 9.521 6.401zm12.377 7.115c15.047 4.846-7.383-5.931 0 0zm63.364 38.384c.196-2.988-2.054 2.55 0 0zm6.513 2.74c3.472-3.36.144 5.362 5.754-.823.058-4.428-.17-7.042-6.447-1.662-1.734.962-2.504 5.035.693 2.486zM47.024 147.098c-1.067-4.192-7.475-4.174 0 0zm6.95 4.556c-2.583-4.282-9.214-3.877 0 0zm39.568 23.861c3.866 3.434 17.741 2.518 4.69.426-1.93-2.858-12.268-2.171-4.69-.426zm54.385 33.593c5.944-4.99-5.76 2.223 0 0zm12.366 8.493c.038-1.602-2.563.7 0 0zm.02-2.243c6.584-6.97-6.376.412 0 0zM29.917 132.776c-5.61-8.004-3.485-11.601-8.899-18.14-1.028-5.002-9.285-16.341-4.27-4.329 4.59 7.03 5.95 17.91 13.17 22.469zm128.329 80.365c12.118-7.828-4.969-3.407 0 0zm9.247 3.622c6.068-5.206-3.839-1.086 0 0zm-122.53-78.515c1.734-2.583-4.485-.333 0 0zm120.6 76.043c5.872-3.785-1.353-3.204-1.065.346l1.065-.346zm-79.698-50.233c-.202-2.563-3.105.216 0 0zm4.924 2.832c-1.569-3.165-2.406.497 0 0zm84.197 49.959c7.526-5.429-4.557-1.041-1.576 1.033l1.576-1.033zm-2.883-1.393c6.133-5.134-6.468 2.275 0 0zm14.724 9.801c4.115-2.753-5.001-.889 0 0zm-138.09-88.872c5.512 1.235 22.042 13.581 12.293.857-4.995-1.478-2-13.687-7.094-11.529 3.42 5.715 2.81 8.14-4.37 4.545-9.016-4.408-5.067 2.178-3.3 3.996-2.408.549 3.177 2.086 2.47 2.13zm-25.13-19.845c.987-4.088-9.096-22.469-4.76-9.214 1.562 2.779 1.4 8.042 4.76 9.214zm46.126 28.437c-2.844-2.373-.137-.34 0 0zm6.99 1.63c0-4.33-7.728-1.76 0 0zm60.618 38.207c-1.157-2.957-4.57-.066 0 0zm2.91 2.124c-.433-1.654-1.682.321 0 0zm24.024 15.138c2.309-1.706-2.884-.221 0 0zM36.156 119.744c6.61-2.558-7.083-1.825 0 0zm95.848 60.38c-.077-4.276-4.217 1.067 0 0zm-98.458-66.469c4.244-1.43-3.93-.94 0 0zm12.32 5.97c-.073-1.405-1.301.537 0 0zm150.3 92.168c5.46-1.105 17.904 2.78 19.911-1.444-6.63-.164-22.932-4.683-23.704 1.071l1.452.23 2.342.143zm-146.384-91.18c.1-4.336-3.38-.163 0 0zM17.39 98.138c-1.471-8.26-5.598-1.25 0 0zm7.722 1.942c.099-2.655-7.07-2.387 0 0zm4.414 2.171c-1.275-1.034-.994 1.3 0 0zM57.31 120.07c1.309-1.204-3.099-.889 0 0zm-30.72-22.71c-.751-6.238-8.952-.935 0 0zM10.745 87.08c-.223-2.877-1.544 1.085 0 0zm2.36-1.777c-.385-3.415-2.027.43 0 0zM26.12 93.07c5.506-2.158-10.026-4.473-1.125-.405l1.125.405zm174.226 107.62c3.524-3.23-4.473-1 0 0zm21.049 10.907c1.413-4.171-3.558.55 0 0zM27.45 86.25c.583-4.04-4.367.804 0 0zM8.927 73.84c-.994-5.702-.857-15.714 8.658-12.333-12.7 2.524 8.795 15.79 6.081 5.315 5.342.263 10.45-3.157 7.644 2.027 10.528-1.157 17.82-10.285 27.987-9.003 7.918-1.052 16.576-1.844 25.11-5.035 7.016-.504 13.77-8.057 9.927-12.536-9.567-.81-19.586.386-30.159 2.492-11.717 2.432-22.362 7.061-34.186 9.05-11.529 1.55 2.315 4.263-.988 4.871-6.01 2.086 7.174 3.492-.778 5.695-4.91-.934-10.024-2.621-7.925-7.8C9.26 58.021-.444 62.598 8.28 73.832l.648.006zm26.608-13.55c2.583-9.533 13.862 7.848 4.237 1.269-1.145-.864-3.042-1.564-4.237-1.269zm.502-4.624c3.735-2.778 1.982 1.564 0 0zm4.741.08c.342-4.388 10.863 2.321 1.734 1.576l-1.734-1.577zm6.487-2.609c2.374-2.774.688 2.458 0 0zm1.662-1.111c3.949-4.741 22.343-3.029 8.879-.466-3.61-2.72-6.375 1.602-8.879.466zm24.01-3.702c-.594-12.955 11.934 4.597 0 0zm6.815-.04c2.49-6.525 9.67-2.621 1.157-1.314.182.7-.255 3.375-1.157 1.314zM24.765 82.902c7.44-4.558-7.9-3.955 0 0zm5.505 1.524c2.61-2.772-5.676-1.125 0 0zM14.054 72.924c4.25-3.27-5.035-1.242 0 0zm219.764 137.483c.124-3.793-3.25 1.706 0 0zm-22.331-15.243c.634-4.36-2.87.38 0 0zm28.471 16.715c5.945.02 18.014-1.852 5.08-1.845-2.033.315-11.828.25-5.08 1.845zM35.11 81.75c4.813-.327 7.526-5.304-.936-5.022-13.11-1.353 11.567 4.493-1.68 2.819-1.778 1.177 2.51 2.53 2.616 2.203zm4.237 2.146c-.504-3.087-1.492 1.64 0 0zm5.028-13.406c2.086-2.59-2.89-.693 0 0zM28.367 43.74c8.593-2.916 20.337-6.199 24.392 1.44-4.127-4.963-1.667-9.855 2.23-2.59 5.512 7.344 8.27-3.341 4.687-5.807 4.088 5.074 8.73 7.475 2.733.322 6.52-7.841-13.045 1.026-17.491.934-2.138.96-22.089 5.087-16.55 5.701zm5.035-9.637c4.899-3.694 16.943 2.203 9.214-3.676-.758-.666-16.922 4.46-9.214 3.676zm17.859.738c5.728.144-2.471-7.703 4.355-4.146-1.118-3.661-7.951-4.348-11.292-5.812-1.89 3.348 3.843 10.004 6.937 9.958zM36.534 18.63c1.982-2.687-3.478 1.367 0 0zm7.3 1.745c9.238-1.222-2.356-3.975-1.866-.097l1.865.097zM30.204 9.717c-6.507-8.494 12.235 1.426 5.623-7.468-5.564-4.426-10.906 4.99-5.623 7.468zm83.47 44.957c2.984-5.285-12.312-7.128-2.007-1.872.948.315.734 2.237 2.007 1.872zM53.108 251.495c-.66 2.606-1.069 6.979-1.222 13.117 0 1.206-.543 1.81-1.632 1.81s-1.847-.527-2.276-1.576c-1.166-2.838-2.27-4.817-3.324-5.947-1.242-1.32-2.894-2.118-4.955-2.39-2.215-.35-7.733-.525-16.555-.525-2.02 0-3.343.215-3.963.644-.389.27-.583.854-.583 1.749v26.409c0 .894.563 1.32 1.688 1.283 3.461-.04 8.474-.276 15.04-.7 1.284-.158 2.15-.575 2.596-1.256.45-.68.887-2.436 1.312-5.275.27-1.555 1.186-2.158 2.74-1.806 1.32.272 1.888.875 1.693 1.806-1.09 5.288-1.442 12.167-1.053 20.64.041 1.008-.6 1.554-1.923 1.632-1.09.117-1.77-.467-2.04-1.75-1.008-4.857-2.887-7.453-5.624-7.785-2.74-.328-7.203-.494-13.38-.494-.7 0-1.049.251-1.049.757v26.235c0 1.944.717 3.267 2.154 3.964 1.13.583 3.558 1.109 7.287 1.575 1.907.194 2.74 1.032 2.51 2.506-.235 1.283-1.943 1.789-5.133 1.517-9.21-.74-16.81-.7-22.793.119-1.673.23-2.506-.45-2.506-2.041 0-1.013.833-1.595 2.506-1.75 3.809-.429 5.712-3.772 5.712-10.027v-49.908c0-2.562-.458-4.534-1.369-5.915-.915-1.38-2.616-2.635-5.1-3.761-1.556-.7-2.138-1.651-1.75-2.857.194-.737.506-1.147.931-1.223.389-.118 1.421-.04 3.089.234 2.45.388 8.223.583 17.316.583 10.729 0 19.996-.235 27.81-.7 2.603-.158 3.907.057 3.907.64 0 .158-.02.311-.061.466zM90.915 325.502c0 1.555-.875 2.235-2.623 2.04-5.36-.506-12.008-.43-19.936.231-1.595.158-2.574.117-2.946-.113-.37-.235-.552-.875-.552-1.928 0-.93 1.057-1.716 3.175-2.36 2.121-.639 3.177-2.554 3.177-5.74V264.87c0-3.15-.457-5.462-1.368-6.94-.915-1.477-2.518-2.623-4.81-3.437-1.206-.43-1.81-1.032-1.81-1.81 0-1.166.875-2.04 2.624-2.623 2.644-.855 5.385-2.174 8.223-3.964 2.332-1.4 3.81-2.097 4.429-2.097 1.437 0 2.159.988 2.159 2.971 0-.153-.078 1.79-.236 5.83-.113 3.847-.153 7.636-.113 11.37l.23 52.06c0 2.372.584 4.093 1.75 5.162 1.166 1.068 3.17 1.777 6.004 2.126 1.748.193 2.623.854 2.623 1.983zM143.644 322.064c0 .818-1.486 2.05-4.458 3.7-2.975 1.653-5.356 2.479-7.142 2.479-1.518 0-2.857-.737-4.023-2.215-1.166-1.477-1.985-2.214-2.45-2.214-.349 0-2.195.797-5.54 2.388-3.339 1.595-6.703 2.393-10.084 2.393-3.186 0-5.85-.935-7.987-2.797-2.332-2.062-3.498-4.86-3.498-8.398 0-6.724 7.696-11.542 23.088-14.457 2.64-.506 3.984-1.575 4.02-3.207l.119-3.732c.234-6.373-2.584-9.559-8.454-9.559-1.672 0-3.255 1.494-4.754 4.486-1.493 2.996-3.643 4.607-6.441 4.842-3.186.308-4.781-1.032-4.781-4.024 0-1.867 2.372-4.04 7.113-6.53 4.976-2.603 9.758-3.907 14.344-3.907 7.888 0 11.794 3.753 11.717 11.254l-.235 24.017c-.036 2.527 1.033 3.789 3.207 3.789.429 0 1.246-.096 2.449-.291 1.207-.194 1.907-.292 2.102-.292 1.125 0 1.688.761 1.688 2.275zm-17.955-13.29c.04-.973-.187-1.617-.673-1.924-.486-.311-1.25-.373-2.3-.178-9.368 1.672-14.052 4.724-14.052 9.154 0 4.47 2.429 6.704 7.287 6.704 1.944 0 3.948-.368 6.004-1.105 2.413-.858 3.616-1.886 3.616-3.093l.118-9.559zM186.988 315.357c0 4.12-1.588 7.397-4.753 9.825-3.167 2.43-7.49 3.644-12.972 3.644-3.652 0-7.308-.388-10.96-1.166-3.15-.7-4.976-1.34-5.481-1.923-.312-.547-.466-3.206-.466-7.988 0-2.06.466-3.13 1.4-3.206.932-.118 1.73.389 2.39 1.514 2.914 5.093 7.618 7.64 14.109 7.64 5.477 0 8.218-1.907 8.218-5.717 0-1.668-.62-3.069-1.866-4.195-1.361-1.283-4-2.78-7.927-4.49-5.676-2.525-9.466-4.74-11.369-6.647-2.061-2.02-3.09-4.74-3.09-8.162 0-4.199 1.613-7.461 4.839-9.793 2.992-2.256 6.996-3.381 12.008-3.381 3.15 0 6.025.25 8.632.757 2.798.506 4.255 1.126 4.372 1.866.308 2.174.952 5.324 1.924 9.446.117.502-.43.911-1.632 1.222-1.284.272-2.138.057-2.567-.64-3.069-5.016-6.955-7.522-11.66-7.522-5.324 0-7.987 1.71-7.987 5.13 0 1.906.72 3.42 2.157 4.546 1.284.972 4.295 2.49 9.037 4.551 4.975 2.137 8.356 4.061 10.146 5.77 2.332 2.214 3.498 5.19 3.498 8.919zM255.575 325.56c0 1.36-.915 2.08-2.741 2.157-2.721.04-6.28.234-10.668.583-2.178.429-3.733.158-4.664-.814-6.142-6.607-11.352-13.526-15.628-20.757-.348-.62-.794-.931-1.34-.931-.66 0-1.805.583-3.437 1.75-1.83 1.008-2.741 2.448-2.741 4.31 0 1.324.036 3.227.117 5.718.078 2.485.697 4.116 1.863 4.894.817.547 2.705.972 5.655 1.284 1.827.234 2.742.914 2.742 2.04 0 .895-.146 1.45-.438 1.66-.29.214-1.06.263-2.304.146-3.886-.348-10.453-.154-19.703.583-2.332.194-3.596-.098-3.79-.875-.077-.27-.118-.66-.118-1.166 0-1.202 1.187-2.118 3.56-2.736 2.137-.548 3.205-3.054 3.205-7.523v-50.955c0-3.186-.31-5.401-.935-6.644-.854-1.595-2.644-2.839-5.364-3.733-1.28-.425-1.923-1.028-1.923-1.806 0-1.13.915-2.004 2.74-2.623a36.555 36.555 0 0 0 8.336-4.024c2.139-1.397 3.462-2.098 3.964-2.098 1.596 0 2.393 1.008 2.393 3.033 0-.275-.02 1.652-.061 5.77a935.371 935.371 0 0 0-.056 11.428l.117 36.494c0 1.012.271 1.514.814 1.514.583 0 1.478-.502 2.684-1.514 3.226-2.527 7.19-5.83 11.891-9.911.935-.971 1.4-1.749 1.4-2.332 0-1.048-1.574-1.79-4.72-2.214-1.36-.159-2.004-.915-1.928-2.276.118-1.36.799-1.943 2.041-1.749 2.802.39 6.883.604 12.243.644 3.733.036 7.445.057 11.138.057 1.202.04 1.806.757 1.806 2.158 0 1.32-.952 2.04-2.855 2.158-2.996.113-5.814.793-8.453 2.04-3.693 1.668-7.64 4.603-11.838 8.802-.308.234-.466.525-.466.874 0 .543.66 1.847 1.984 3.907 4.858 7.385 9.445 12.96 13.757 16.732 2.761 2.37 5.344 3.555 7.753 3.555 1.79 0 2.898.126 3.323.38.43.253.645.924.645 2.01z"></path>
              </svg>
              Flask
            </li>
            <li className="skill_item">
              <img
                className="skill_icon"
                src="https://marshmallow.readthedocs.io/en/stable/_static/marshmallow-logo.png"
              />{" "}
              Marshmallow
            </li>
            <li className="skill_item">
              <img
                className="skill_icon"
                src="https://clipart-library.com/2023/RcdgAAE9i.png"
              />{" "}
              SQL
            </li>
          </ul>
        </div>
        <div className="skill_container container">
          <p className="subtitle">Graphic Design</p>
          <ul className="skill_list grid">
            <li className="skill_item">
              <img
                className="skill_icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png"
              />
              Photoshop
            </li>
            <li className="skill_item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png"
                className="skill_icon"
              />
              InDesign
            </li>
            <li className="skill_item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png"
                className="skill_icon"
              />
              Illustrator
            </li>
            <li className="skill_item">
              <img
                className="skill_icon"
                src="https://global.discourse-cdn.com/mcneel/uploads/default/original/4X/8/1/1/811bca9e86eea0a004ecef3ad2f92f7a69a20262.jpeg"
              />
              Rhinoceros
            </li>
            <li className="skill_item">
              <img
                className="skill_icon"
                src="https://play-lh.googleusercontent.com/y92LD5c5rdlNfquCy-YPNIvdnS4ISEL05wickp28OLya8WlmWQwXfAP0Yys9iTssny3K"
              />
              AutoCAD
            </li>
            <li className="skill_item">
              <img
                className="skill_icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaCvmKLqhZNlRFGk1Bk8M8ZtSmzd_CXiTR1OogLd8ZsuExVZf96D69zoIFu94VxmsQ_A&usqp=CAU"
              />
              Revit
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
