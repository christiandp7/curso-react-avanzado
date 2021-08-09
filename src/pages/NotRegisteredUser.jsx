import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { useRegisterMutation } from "../containers/RegisterMutation";
import { useLoginMutation } from "../containers/LoginMutation";

export const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context);
    const {
        registerMutation,
        loading: loadingReg,
        error: errorReg,
    } = useRegisterMutation();
    const {
        loginMutation,
        loading: loadingLog,
        error: errorLog,
    } = useLoginMutation();

    const onSubmitReg = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        registerMutation({ variables }).then((data) => {
            const { signup } = data.data;
            activateAuth(signup);
        });
    };

    const onSubmitLog = ({ email, password }) => {
        const input = { email, password };
        const variables = { input };
        loginMutation({ variables }).then((data) => {
            const { login } = data.data;
            console.log(login);
            activateAuth(login);
        });
    };

    const errorMsgReg = errorReg && "ha ocurrido un error";
    const errorMsgLog =
        errorLog &&
        "el usuario o contraseña no son correctos o el usuario no existe";

    return (
        <Fragment>
            <UserForm
                error={errorMsgReg}
                loading={loadingReg}
                title="Registrarse"
                onSubmit={onSubmitReg}
            />
            <UserForm
                error={errorMsgLog}
                loading={loadingLog}
                title="Iniciar sesión"
                onSubmit={onSubmitLog}
            />
        </Fragment>
    );
};
