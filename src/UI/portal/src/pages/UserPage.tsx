import React, { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { StoreState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/thunks/userThunk';
import ModalCommon from '../components/modals/ModalCommon';
import CreateUser from '../components/user/CreateUser';
import { ActionTypeGrid } from '../models/enums/ActionTypeGrid';
import UpdateUser from '../components/user/UpdateUser';
import User from '../models/User';
import { useTranslation } from 'react-i18next';

const UserPage: React.FC = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [actionGrid, setActionGrid] = useState(ActionTypeGrid.CREATE);

    const [t] = useTranslation();

    const userState = useSelector((state: StoreState) => state.user);
    const dispatch = useDispatch();

    const users = useMemo(() => userState.users, [userState.users]);
    const [user, setUser] = useState<User>(users[0] || null);

    useEffect(() => {
        getUsers()(dispatch);
    }, [dispatch]);

    const openModal = (actionGrid: ActionTypeGrid, user?: User) => {
        setActionGrid(actionGrid);
        if (user) {
            setUser(user);
        }
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const BodyModal = useCallback((actionGrid : ActionTypeGrid) => {
        switch (actionGrid) {
            case ActionTypeGrid.CREATE:
                return CreateUser;
            case ActionTypeGrid.EDIT:
                return UpdateUser;
            case ActionTypeGrid.DELETE:
                return CreateUser;
        }
    }, [actionGrid]);

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
                                    <h4 className="page-title">{t("user.title")}</h4>
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
                                                <h4 className="card-title">{t('user.title_detail')}</h4>
                                            </div>
                                            {/*end col*/}
                                        </div>{" "}
                                        {/*end row*/}
                                    </div>
                                    {/*end card-header*/}
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>{t('user.id')}</th>
                                                        <th>{t('user.full_name')}</th>
                                                        <th>{t('user.username')}</th>
                                                        <th>{t('user.email')}</th>
                                                        <th>{t('user.email_confirmed')}</th>
                                                        <th>{t('user.created_on')}</th>
                                                        <th>{t('user.roles')}</th>
                                                        <th>{t('user.action')}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((user) => (
                                                        <tr key={user.id}>
                                                            <td>{user.id}
                                                                {dayjs(user.createdOnUtc).diff(dayjs(), 'day') > 0 && dayjs(user.createdOnUtc).diff(dayjs(), 'day') < 7
                                                                    && <span className="badge bg-soft-success">New</span>}
                                                            </td>
                                                            <td>{user.fullName}</td>
                                                            <td>{user.userName}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.emailConfirmed ? "Yes" : "No"}</td>
                                                            <td>{dayjs(user.createdOnUtc).format('DD-MM-YYYY HH:mm')}</td>
                                                            <td>
                                                                <span className="badge bg-soft-primary">Admin</span>
                                                                <span className="badge bg-soft-primary">User</span>
                                                            </td>
                                                            <td>
                                                                <button className="btn"
                                                                    onClick={() => openModal(ActionTypeGrid.EDIT, user)}>
                                                                    <i className="fa-solid fa-pen text-secondary font-16"></i>
                                                                </button>
                                                                <button className="btn"
                                                                    onClick={() => openModal(ActionTypeGrid.DELETE)}>
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
                                                    + {t('user.add_new')}
                                                </button>
                                            </div>
                                            {/*end col*/}
                                            <div className="col-auto">
                                                <nav aria-label="...">
                                                    <ul className="pagination pagination-sm mb-0">
                                                        <li className="page-item disabled">
                                                            <a
                                                                className="page-link"
                                                                href="crm-contacts.html#"
                                                                tabIndex={-1}
                                                            >
                                                                {t('previous')}
                                                            </a>
                                                        </li>
                                                        <li className="page-item active">
                                                            <a className="page-link" href="crm-contacts.html#">
                                                                1
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="crm-contacts.html#">
                                                                2 <span className="sr-only">(current)</span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="crm-contacts.html#">
                                                                3
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="crm-contacts.html#">
                                                            {t('next')}
                                                            </a>
                                                        </li>
                                                    </ul>
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
                props={{ modalIsOpen, openModal, closeModal, user }}
                Component={BodyModal(actionGrid)}
            />
        </>
    );
};

export default UserPage;
