import React, { Fragment } from "react";
import { Form, Input, Button, Title, Error } from "./styles";
import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ onSubmit, title, error, loading }) => {
    const email = useInputValue("");
    const password = useInputValue("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    };
    return (
        <Fragment>
            <Form disabled={loading} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={loading} placeholder="Email" {...email} />
                <Input
                    disabled={loading}
                    placeholder="Password"
                    type="password"
                    {...password}
                />
                <Button disabled={loading}>{title}</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </Fragment>
    );
};
