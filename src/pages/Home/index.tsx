import {useState} from "react";

const Home = () => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [data, setData] = useState<object>({})

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target

        if (type === 'checkbox') {
            setData(prevData => {
                const currentArray = Array.isArray(prevData[name]) ? prevData[name] : [];
                if (checked) {
                    return {...prevData, [name]: [...currentArray, value]};
                } else {
                    return {...prevData, [name]: currentArray.filter((item: string) => item !== value)};
                }
            });
        } else {
            setData({...data, [name]: value})
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitted(true)
        console.log(data)

        setTimeout(() => {
            setIsSubmitted(false)
            setData({})
        }, 3000)
    }

    //?? validation => home work with error messages
    //?? datalar should be stored => local storage
    //?? submit edilen deyerler api-ye post edilsin => axios, json-server ( db.json )

    return (
        <div className='container mx-auto px-4'>
            {
                isSubmitted ? (
                    <div>
                        <h1 className='text-2xl font-bold'>Form Submitted 🎉</h1>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} >
                        <div className='flex flex-col w-full max-w-[85%] my-[30px]'>
                                <span
                                    className='text font-mono text-lg italic font-semibold tracking-tight	text-orange-500'>Name *</span>
                            <input className='text font-mono text-lg p-4 border-4 rounded-md outline-0'
                                   type="text"
                                   name='userName'
                                   placeholder='Enter your name'
                                   onChange={(e) => handleInputChange(e)}
                            />
                        </div>

                        <div className='flex flex-col w-full max-w-[85%] my-[30px]'>
                                <span
                                    className='text font-mono text-lg italic font-semibold tracking-tight	text-orange-500'>Country *</span>
                            <select className='text font-mono text-lg p-4 border-4 rounded-md outline-0'
                                    name='country'
                                    onChange={(e) => handleInputChange(e)}
                            >
                                <option value="aze">Azerbaijan</option>
                                <option value="tur">Turkey</option>
                                <option value="rus">Russia</option>
                                <option value="usa">United States of America</option>
                            </select>
                        </div>

                        <div className='flex flex-col w-full max-w-[85%] my-[30px]'>
                                <span
                                    className='text font-mono text-lg italic font-semibold tracking-tight	text-orange-500'>Description *</span>
                            <textarea
                                className='text font-mono text-lg p-4 border-4 rounded-md outline-0'
                                name="description"
                                onChange={(e) => handleInputChange(e)}
                            ></textarea>
                        </div>

                        <div className='flex flex-col w-full max-w-[85%] my-[30px]'>
                                <span
                                    className='text font-mono text-lg italic font-semibold tracking-tight	text-orange-500'>Marriage? *</span>
                            <div>
                                <span className='text font-mono text-lg text-yellow-500 mr-4'>Married:</span>
                                <input type='radio'
                                       className='text font-mono text-lg p-4 border-4 rounded-md outline-0 text-yellow-500'
                                       value='Married'
                                       name='marriage'
                                       onChange={(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <span className='text font-mono text-lg text-yellow-500 mr-4'>Single:</span>
                                <input type='radio'
                                       className='text font-mono text-lg p-4 border-4 rounded-md outline-0 text-yellow-500'
                                       value='Single'
                                       name='marriage'
                                       onChange={(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <span className='text font-mono text-lg text-yellow-500 mr-4'>Divorce:</span>
                                <input type='radio'
                                       className='text font-mono text-lg p-4 border-4 rounded-md outline-0 text-yellow-500'
                                       value='Divorce'
                                       name='marriage'
                                       onChange={(e) => handleInputChange(e)}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col w-full max-w-[85%] my-[30px]'>
                                <span
                                    className='text font-mono text-lg italic font-semibold tracking-tight	text-orange-500'>Language *</span>
                            <div>
                                <span className='text font-mono text-lg text-yellow-500 mr-4'>English:</span>
                                <input type='checkbox'
                                       className='text font-mono text-lg p-4 border-4 rounded-md outline-0 text-yellow-500'
                                       value='English'
                                       name='language'
                                       onChange={(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <span className='text font-mono text-lg text-yellow-500 mr-4'>Russian:</span>
                                <input type='checkbox'
                                       className='text font-mono text-lg p-4 border-4 rounded-md outline-0 text-yellow-500'
                                       value='Russian'
                                       name='language'
                                       onChange={(e) => handleInputChange(e)}
                                />
                            </div>
                            <div>
                                <span className='text font-mono text-lg text-yellow-500 mr-4'>Turkish:</span>
                                <input type='checkbox'
                                       className='text font-mono text-lg p-4 border-4 rounded-md outline-0 text-yellow-500'
                                       value='Turkish'
                                       name='language'
                                       onChange={(e) => handleInputChange(e)}
                                />
                            </div>
                        </div>

                        <input type='submit'
                               className='w-[250px] transition-colors cursor-pointer rounded-md p-4 text font-mono text-lg text-white bg-orange-500 hover:bg-orange-700'
                               value='Submit'/>
                    </form>
                )
            }
        </div>
    )
}
export default Home;
