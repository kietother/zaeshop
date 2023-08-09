import React, { useEffect, useState } from 'react';
import User from '../models/User';
import dayjs from 'dayjs';

const UserPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
    }, []);

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
                        {users.map((user) => (
                            <tr key={user.VerificationToken}>
                                <td>{user.FullName}</td>
                                <td>{user.VerificationToken}</td>
                                <td>{user.VerifiedOnUtc ? dayjs(user.VerifiedOnUtc).format('DD-MM-YYYY HH:mm') : 'N/A'}</td>
                                <td>{user.ResetPasswordToken}</td>
                                <td>
                                    {user.ResetPasswordTokenExpiresOnUtc
                                        ? dayjs(user.ResetPasswordTokenExpiresOnUtc).format('DD-MM-YYYY HH:mm')
                                        : 'N/A'}
                                </td>
                                <td>{user.ResetPasswordOnUtc ? dayjs(user.ResetPasswordOnUtc).format('DD-MM-YYYY HH:mm') : 'N/A'}</td>
                                <td>{dayjs(user.CreatedOnUtc).format('DD-MM-YYYY HH:mm')}</td>
                                <td>{user.UpdatedOnUtc ? dayjs(user.UpdatedOnUtc).format('DD-MM-YYYY HH:mm') : 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPage;
