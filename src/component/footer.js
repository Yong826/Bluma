import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FiInstagram } from 'react-icons/fi';

function footermain() {

    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a
                    href="/"
                    class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                >
                </a>
                <span class="mb-3 mb-md-0 text-muted">© 2022 Copyright Portfolio
                    <br></br>byungyong kim</span>
            </div>
            <span class="mb-1 mb-md-0 text-muted">울산광역시 북구 산하중앙1로 93 95 블루마 카워시 <br></br> TEL : 0507-1311-7707 | E-mail : kkby8@naver.com</span>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-2 " >
                    <a class="text-muted" href="https://www.instagram.com/blumacarwash">
                        <FiInstagram style={{ width: '30px', height: '30px' }} />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default footermain;
