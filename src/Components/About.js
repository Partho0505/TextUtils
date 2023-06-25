import React from 'react'
import {Link} from 'react-router-dom';

export default function About() {
   
return (
    <>
        <div className="container py-5">
        <h1 className="text-center">About TextUtils</h1>
        <p className = "my-3">Welcome to TextUtils, a powerful and user-friendly web application designed to analyze text and provide a seamless experience for searching word meanings. Whether you're a student, professional, or simply a language enthusiast, TextUtils is here to assist you in understanding and exploring the vast world of written content.</p>

        <section className="mt-5">
            <h2 className='mb-4'>Why Choose TextUtils?</h2>

            <div className="container">
                <div className="md-8 mb-4">
                    <h4>Text Analysis Made Easy</h4>
                    <p className = "my-3">TextUtils makes text analysis effortless. It empowers you to extract valuable insights from any text document, whether it's an article, essay, or even a social media post. Our application offers a wide range of analysis options, including word count, character count, reading time estimation, and more. With TextUtils, you can effortlessly understand the composition and complexity of your text.</p>
                </div>

                <div className="md-8 mb-4 ">
                    <h4>Word Meaning Search</h4>
                    <p className = "my-3"> TextUtils goes beyond basic analysis and allows you to delve deeper into the meanings of words. Our application integrates a robust word search functionality, powered by an extensive vocabulary database. Simply enter a word, and TextUtils will provide you with its definition, synonyms, antonyms, and even usage examples. Expand your linguistic knowledge and elevate your writing skills with ease.</p>
                </div>

                <div className="md-8 mb-4">
                    <h4>User-Friendly Interface</h4>
                    <p className = "my-3">We understand the importance of an intuitive and user-friendly interface, which is why TextUtils has been meticulously designed to provide a seamless user experience. Whether you're a beginner or an advanced user, our clean and intuitive interface ensures that you can navigate the application effortlessly. Say goodbye to clunky interfaces and embrace the simplicity of TextUtils.</p>
                </div>
            </div>
        </section>

        <section className="get-started-section mt-5">
            <h2>Get Started with TextUtils Today!</h2>
            <p className = "my-3">TextUtils is your one-stop solution for text analysis and word exploration. Whether you're looking to gain insights from your own writing, enhance your vocabulary, or simply indulge in the beauty of language, TextUtils is the perfect tool for you.
            Start using TextUtils today and unlock a world of possibilities with just a few clicks. Experience the power of text analysis and word meaning search like never before!</p>

        <Link to='/'><button className="btn btn-primary">Start Now</button></Link>
        </section>
        </div>
    </>
  );

}

