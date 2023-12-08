import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContentItemModel from "../../models/content-item/ContentItemModel";
import { v4 as uuidv4 } from 'uuid';
import ContentItemBulkUploadItem from "./ContentItemBulkUploadItem";
import { ActualFileObject, FilePondFile } from "filepond";
import { ContentItemBulkUploadItemModel } from "../../models/content-item/ContentItemBulkUploadModel";
import { FilePond } from "react-filepond";
import convertFileToBase64 from "../../utils/covert-base64";
import { toast } from "react-toastify";
import { bulkUpdateContentItems } from "../../services/content-item/cotentItemService";
import { useAppDispatch } from "../../store";
import { getContentItemsAsyncThunk } from "../../store/reducers/ContentItemSlice";

type ContentItemBulkUploadProps = {
    id: string | undefined;
    contentItems: ContentItemModel[]
}

const ContentItemBulkUpload: React.FC<ContentItemBulkUploadProps> = ({ id, contentItems }: ContentItemBulkUploadProps) => {
    const [t] = useTranslation();
    const dispatch = useAppDispatch();

    const [files, setFiles] = useState<(ActualFileObject)[]>([]);

    const onUpdateFiles = (filesPondFiles: FilePondFile[]) => {
        const files = filesPondFiles.map(item => item.file);
        setFiles(files);
    }

    const [contentItemBulkUploadItems, setContentItemBulkUploadItems] = useState<ContentItemBulkUploadItemModel[]>([]);

    useEffect(() => {
        if (!contentItems) return;
        const exsitsItems = [...contentItems].sort((a, b) => a.orderBy - b.orderBy).map(item => {
            return {
                id: item.id,
                fileName: item.name,
                isPublic: false,
                orderBy: item.orderBy
            };
        });

        setContentItemBulkUploadItems(exsitsItems);
    }, [contentItems]);

    const updateExistItem = async (id: number, isPublic: boolean, orderBy: number, file?: ActualFileObject) => {
        const existsItem = contentItemBulkUploadItems.find(item => item.id === id);
        if (existsItem) {
            existsItem.isPublic = isPublic;
            existsItem.orderBy = orderBy;

            if (file) {
                const base64File = await convertFileToBase64(file);

                existsItem.fileName = file.name;
                existsItem.base64File = base64File;
            }

            setContentItemBulkUploadItems([...contentItemBulkUploadItems.filter(item => item.id !== id), existsItem].sort((a, b) => a.orderBy - b.orderBy));
        }
    }

    const deleteExistItem = (id: number) => {
        const confirm = window.confirm(t("content_item.confirm_delete_item"));
        if (confirm) {
            setContentItemBulkUploadItems(contentItemBulkUploadItems.filter(item => item.id !== id));
        }
    }

    const onSaveChanges = async () => {
        // Build exist items
        const existsItems: ContentItemBulkUploadItemModel[] = contentItemBulkUploadItems.map(item => {
            return {
                id: item.id,
                fileName: item.fileName,
                base64File: item.base64File?.split(',')[1],
                isPublic: false,
                orderBy: item.orderBy
            };
        });

        // Build new items
        let orderBy = Math.max(...existsItems.map(item => item.orderBy));
        const items: ContentItemBulkUploadItemModel[] = await Promise.all(files.map(async (item) => {
            const base64File = await convertFileToBase64(item);

            const newItem: ContentItemBulkUploadItemModel = {
                fileName: item.name,
                base64File: base64File?.split(',')[1],
                isPublic: false,
                orderBy: ++orderBy
            };
            return newItem;
        }));

        const toastId = toast.loading(t("toast.please_wait"), {
            hideProgressBar: true
        });

        if (id && Number(id)) {
            await bulkUpdateContentItems(Number(id), {
                items,
                existsItems
            });

            toast.update(toastId, {
                render: t("toast.create_inprogress_sucessfully"), type: toast.TYPE.SUCCESS, isLoading: false,
                autoClose: 2000
            });

            return;
        }

        toast.done(toastId);
    }

    const onReset = () => {
        setFiles([]);
        setContentItemBulkUploadItems([...contentItems].sort((a, b) => a.orderBy - b.orderBy).map(item => {
            return {
                id: item.id,
                fileName: item.name,
                isPublic: false,
                orderBy: item.orderBy
            };
        }));

        // Scroll on Top
        window.scrollTo(0, 0);
    }

    const onDeleteAll = async () => {
        const confirm = window.confirm(t("content_item.confirm_delete_all"));

        if (confirm) {
            setFiles([]);
            setContentItemBulkUploadItems([]);

            const toastId = toast.loading(t("toast.please_wait"), {
                hideProgressBar: true
            });

            await bulkUpdateContentItems(Number(id), {});

            toast.update(toastId, {
                render: t("toast.create_inprogress_sucessfully"), type: toast.TYPE.SUCCESS, isLoading: false,
                autoClose: 2000
            });

            // Referesh
            await dispatch(getContentItemsAsyncThunk({ id: Number(id) }));
        }
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
                        <div className="card">
                            <div className="card-header">
                                <div className="form-group mb-3">
                                    <h4 className="card-title">Basic Example</h4>
                                    <p className="text-muted mb-0">
                                        List groups are a flexible and powerful component for displaying a
                                        series of content.
                                    </p>
                                </div>
                                <div className="form-group mb-1">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={onReset}
                                    >
                                        {t('content_item.reset')}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={onSaveChanges}
                                    >
                                        {t('content_item.bulk_upload_button')}
                                    </button>

                                    <button className="btn float-end"
                                        onClick={onDeleteAll}>
                                        <i className="fa-solid fa-trash text-danger font-16"></i>
                                    </button>
                                </div>
                            </div>
                            {/*end card-header*/}
                            <div className="card-body">
                                <div className="d-grid">
                                    <FilePond
                                        files={files}
                                        onupdatefiles={onUpdateFiles}
                                        allowMultiple={true}
                                        maxFiles={100}
                                        name="files"
                                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                        beforeAddFile={(file) => {
                                            return new Promise((resolve) => {
                                                if (!file.fileType.includes('image/')) {
                                                    resolve(false);
                                                }
                                                resolve(true);
                                            })
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    <ul className="list-group">
                                        {contentItemBulkUploadItems.map((item) => (
                                            <ContentItemBulkUploadItem
                                                key={uuidv4()}
                                                contentItemBulkUploadItemModel={item}
                                                contentItem={contentItems.find(contentItem => contentItem.id === item.id)!}
                                                updateExistItem={updateExistItem}
                                                deleteExistItem={deleteExistItem}
                                            />
                                        ))}
                                    </ul>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                                {/* container */}
                            </div>
                            {/* end page content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ContentItemBulkUpload);