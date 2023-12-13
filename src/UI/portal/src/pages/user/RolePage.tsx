import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ModalCommon from '../../components/shared/ModalCommon';
import { ActionTypeGrid } from '../../models/enums/ActionTypeGrid';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store';
import Role from '../../models/role/Role';
import Pagination from '../../components/shared/Pagination';
import { getRoles } from '../../store/thunks/roleThunk';
import { v4 as uuidv4 } from 'uuid';
import CreateRole from '../../components/role/CreateRole';
import DeleteRole from '../../components/role/DeleteRole';
import UpdateRole from '../../components/role/UpdateRole';

const RolePage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [actionGrid, setActionGrid] = useState(ActionTypeGrid.CREATE);

    const [t] = useTranslation();

    const roleState = useSelector((state: StoreState) => state.role);
    const dispatch = useDispatch();

    const roles = useMemo(() => roleState.roles, [roleState.roles]);
    const [role, setRole] = useState<Role>(roles[0] || null);

    // Paging
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    useEffect(() => {
        getRoles(pageIndex, pageSize)(dispatch);
    }, [dispatch, pageIndex, pageSize]);

    const openModal = (actionGrid: ActionTypeGrid, role?: Role) => {
        setActionGrid(actionGrid);
        if (role) {
            setRole(role);
        }
        setIsOpen(true);
    }

    const closeModal = (isReload?: boolean) => {
        if (isReload) {
            getRoles(pageIndex, pageSize)(dispatch);
        }
        setIsOpen(false);
    }

    const BodyModal = useCallback((actionGrid: ActionTypeGrid) => {
        switch (actionGrid) {
            case ActionTypeGrid.CREATE:
                return CreateRole;
            case ActionTypeGrid.EDIT:
                return UpdateRole;
            case ActionTypeGrid.DELETE:
                return DeleteRole;
            default:
                return React.Fragment;
        }
    }, []);

    return (
        <>
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
                                            <li className="breadcrumb-item active">Users</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">{t("role.title")}</h4>
                                </div>
                                {/*end page-title-box*/}
                            </div>
                            {/*end col*/}
                        </div>
                        {/* end page title end breadcrumb */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h4 className="card-title">{t('role.title_detail')}</h4>
                                            </div>
                                            {/*end col*/}
                                        </div>{" "}
                                        {/*end row*/}
                                    </div>
                                    {/*end card-header*/}
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                {!roleState.loading && <caption className="pt-2 pb-0">{t('paging.caption', {
                                                    start: ((pageIndex - 1) * pageSize) + 1,
                                                    end: ((pageIndex - 1) * pageSize) + roleState.roles.length,
                                                    total: roleState.totalRecords
                                                })}</caption>}
                                                <thead>
                                                    <tr>
                                                        <th>{t('role.id')}</th>
                                                        <th>{t('role.name')}</th>
                                                        <th>{t('role.normalized_name')}</th>
                                                        <th>{t('role.users')}</th>
                                                        <th>{t('role.action')}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {roles.map((role) => (
                                                        <tr key={uuidv4()}>
                                                            <td>{role.id}
                                                            </td>
                                                            <td>{role.name}</td>
                                                            <td>{role.normalizedName}</td>
                                                            <td>{role.users}</td>
                                                            <td>
                                                                <button className="btn"
                                                                    onClick={() => openModal(ActionTypeGrid.EDIT, role)}>
                                                                    <i className="fa-solid fa-pen text-secondary font-16"></i>
                                                                </button>
                                                                <button className="btn"
                                                                    onClick={() => openModal(ActionTypeGrid.DELETE, role)}>
                                                                    <i className="fa-solid fa-trash text-secondary font-16"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn btn-outline-light btn-sm px-4"
                                                    onClick={() => openModal(ActionTypeGrid.CREATE)}>
                                                    + {t('role.add_new')}
                                                </button>
                                            </div>
                                            <div className="col">
                                                <select className="form-select"
                                                    style={{ width: "auto" }}
                                                    value={pageSize}
                                                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPageSize(Number(event.target.value))}>
                                                    <option value={5}>5</option>
                                                    <option value={15}>15</option>
                                                    <option value={25}>25</option>
                                                    <option value={35}>35</option>
                                                </select>
                                            </div>{" "}
                                            {/*end col*/}
                                            <div className="col-auto">
                                                <nav aria-label="...">
                                                    <Pagination
                                                        pageIndex={pageIndex}
                                                        totalCounts={roleState.totalRecords}
                                                        pageSize={pageSize}
                                                        onPageChange={page => setPageIndex(page)} />
                                                    {/*end pagination*/}
                                                </nav>
                                                {/*end nav*/}
                                            </div>{" "}
                                            {/*end col*/}
                                        </div>
                                        {/*end row*/}
                                    </div>
                                    {/*end card-body*/}
                                </div>
                                {/*end card*/}
                            </div>{" "}
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/* container */}
                </div>
                {/* end page content */}
            </div>
            <ModalCommon
                props={{ modalIsOpen: isOpen, openModal, closeModal, role }}
                Component={BodyModal(actionGrid)}
            />
        </>
    );
};

export default RolePage;