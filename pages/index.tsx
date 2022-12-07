import Link from "next/link";
import Head from "next/head";
import {MainLayout} from "../components/MainLayout";

export default function Index() {
    return <MainLayout title={'Home Page'}>
        <h1>Hello Next.js</h1>
        <h2>Good buy</h2>
        <p><Link href="/about">About</Link></p>
        <p><Link href="/posts">Posts</Link></p>
    </MainLayout>
}