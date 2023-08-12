import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { StoreState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/thunks/userThunk';

const UserPage: React.FC = () => {
    const userState = useSelector((state: StoreState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers()(dispatch);
    }, [dispatch]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">User List</h1>
            <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Full Name</th>
                            <th>Verification Token</th>
                            <th>Verified On</th>
                            <th>Reset Password Token</th>
                            <th>Reset Password Token Expires On</th>
                            <th>Reset Password On</th>
                            <th>Created On</th>
                            <th>Updated On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userState.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.fullName}</td>
                                <td>{user.verificationToken}</td>
                                <td>{user.verifiedOnUtc ? dayjs(user.verifiedOnUtc).format('DD-MM-YYYY HH:mm') : 'N/A'}</td>
                                <td>{user.resetPasswordToken}</td>
                                <td>
                                    {user.resetPasswordTokenExpiresOnUtc
                                        ? dayjs(user.resetPasswordTokenExpiresOnUtc).format('DD-MM-YYYY HH:mm')
                                        : 'N/A'}
                                </td>
                                <td>{user.resetPasswordOnUtc ? dayjs(user.resetPasswordOnUtc).format('DD-MM-YYYY HH:mm') : 'N/A'}</td>
                                <td>{dayjs(user.createdOnUtc).format('DD-MM-YYYY HH:mm')}</td>
                                <td>{user.updatedOnUtc ? dayjs(user.updatedOnUtc).format('DD-MM-YYYY HH:mm') : 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPage;
