import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";
import {MyPost} from "../../interfaces/post";

interface AboutPageProps {
    title: string
}

export default function Index({title}: AboutPageProps) {
    return <MainLayout title={'About Page'}>
        <h1>{title}</h1>
        <button onClick={() => Router.push('/')}>Go back to home</button>
    </MainLayout>
}

Index.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const data: MyPost = await response.json()

    return {
        title: data.title
    }
}