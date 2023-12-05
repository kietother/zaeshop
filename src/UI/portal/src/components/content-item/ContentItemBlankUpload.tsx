import { ActualFileObject, FilePondFile } from "filepond";
import React, { useState } from "react";
import { FilePond } from "react-filepond";
import { useTranslation } from "react-i18next";

const ContentItemBlankUpload: React.FC = () => {
    const [t] = useTranslation();

    const [files, setFiles] = useState<ActualFileObject[]>([]);

    const onUpdateFiles = (filesPondFiles: FilePondFile[]) => {
        const files = filesPondFiles.map(item => item.file);
        setFiles(files);
    }

    return (
        <div className="page-wrapper">
            {/* Page Content*/}
            <div className="page-content-tab">
                <div className="container-fluid">
                    {/* Page-Title */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="float-end">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="crm-contacts.html#">Dashboard</a>
                                        </li>
                                        {/*end nav-item*/}
                                        <li className="breadcrumb-item">
                                            <a href="crm-contacts.html#">CMS</a>
                                        </li>
                                        {/*end nav-item*/}
                                        <li className="breadcrumb-item active">Album Detail</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">{t("album.title")}</h4>
                            </div>
                            {/*end page-title-box*/}
                        </div>
                        {/*end col*/}
                    </div>
                    {/* end page title end breadcrumb */}
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h4 className="card-title">Files Upload</h4>
                                                <p className="text-muted mb-0">Your so fresh input file — Default version</p>
                                            </div>
                                            {/*end col*/}
                                        </div>{" "}
                                        {/*end row*/}
                                    </div>
                                    {/*end card-header*/}
                                    <div className="card-body">
                                        <div className="d-grid">
                                            <p className="text-muted text-center">Upload your blog image here, Please click "Upload Image" Button.</p>
                                            <FilePond
                                                files={files}
                                                onupdatefiles={onUpdateFiles}
                                                allowMultiple={true}
                                                maxFiles={3}
                                                name="files"
                                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                            />
                                        </div>
                                    </div>
                                    {/*end card-body*/}
                                </div>
                                {/*end card*/}
                            </div>{" "}
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>

                    {/*end row*/}
                    {/* container */}
                </div>
                {/* end page content */}
            </div>
        </div>

    );
}

export default React.memo(ContentItemBlankUpload);