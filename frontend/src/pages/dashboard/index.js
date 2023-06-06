// import React, { useState } from 'react';
import devices from './pondlist/pondlist';
import Pond from "./pond";
import { ReactComponent as AddIcon } from "./add.svg"
import { ReactComponent as DownLoadIcon } from "./download.svg"
import './style.css'

function Devices() {
    return (
        <main className="p-4 rounded-4 m-4">
            <h2 className="fw-bold mb-4">Danh sách ao</h2>
            <div class="d-flex flex-wrap justify-content-between text-center">
                {devices.map(e =>
                    <Pond e={e} key={e.id} />
                )}
            </div>

            <div class="d-flex justify-content-between">
                <div>
                    <button class="btn rounded-4" id="add-device">
                        <AddIcon />
                    </button>
                    <br />
                    <span class="fw-bold fs-5">Thêm ao</span>
                </div>
                <div>
                    <button class="shadow btn rounded-5" id="down-load"><span class="fw-bold fs-5">Xuất file báo cáo </span><DownLoadIcon /></button>
                </div>
            </div>
        </main>
    );
}

export default Devices