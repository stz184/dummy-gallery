import {Alert} from "react-bootstrap";
import {useEffect, useState} from "react";

const Alerts = ({alert}) => {
    const [msg, setMsg] = useState(null);

    useEffect(() => {
        setMsg({
            variant: alert[0],
            message: alert[1]
        });

        setTimeout(() => {
            setMsg(null);
        }, 5000);
    }, [alert, setMsg])

    if (msg && msg.message) {
        return <Alert variant={msg.variant}>{msg.message}</Alert>
    } else {
        return <></>
    }
}

export default Alerts;