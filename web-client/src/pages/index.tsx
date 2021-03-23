import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

const Home = ({ data }: { data: string }) => {
    const [message, setMessage] = useState(data);

    return <div>{message ? message : 'Hello!'}</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await axios.get('https://localhost:5001/api/home');
    return {
        props: {
            data
        }
    };
};

export default Home;
