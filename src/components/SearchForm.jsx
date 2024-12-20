import { useState } from "react"
import Input from "./Input";


export default function SearchForm({ inputText, onNewInputText }) {
    const [_inputText, setInputText] = useState('')
    const communismWords = [
        "Communism", "Marxism", "Leninism", "Proletariat", "Bourgeoisie", "Socialist", "Revolution",
        "Dictatorship of the proletariat", "Class struggle", "Red flag", "Workers' state", "Internationalism",
        "Collective ownership", "State control", "Public ownership", "Economic equality", "Classless society",
        "Workers' council", "Soviet", "Central planning", "Five-year plan", "Collectivization", "Nationalization",
        "Red Army", "Soviet Union", "Marxist-Leninist", "Trotskyism", "Maoism", "Stalinism", "Bolshevism",
        "Revolutionaries", "Red Book", "Che Guevara", "Vanguard party", "Proletarian internationalism",
        "Workers' revolution", "Social justice", "Anti-imperialism", "Anti-capitalism", "Class warfare",
        "Dictatorship of the proletariat", "Communist manifesto", "Communist Party", "People's Republic",
        "State socialism", "Collective farm", "Planned economy", "Workers' democracy", "Political economy",
        "Cuban Revolution", "Great Leap Forward", "Cultural Revolution", "Marxist theory", "Socialism with Chinese characteristics",
        "Communist state", "Collective action", "Red terror", "Soviet socialism", "Proletarian dictatorship",
        "Class consciousness", "Revolutionary struggle", "Leninist theory", "Imperialism", "Cultural Marxism",
        "Communist ideology", "Proletarian solidarity", "Peasant revolution", "Socialist realism", "Anti-fascism",
        "Anti-capitalist movement", "Social transformation", "Economic democracy", "Workers' control", "Theoretical Marxism",
        "Revolutionary Marxism", "Utopian socialism", "Democratic centralism", "Proletarian state", "Communist ideology",
        "Bolshevik revolution", "State monopoly", "Class antagonism", "Marxist-Leninist party", "Revolutionary Marxism",
        "Social equality", "People's democracy", "Red power", "Socialist state", "Cuban socialism", "Vietnamese socialism",
        "Chilean socialism", "International socialist movement", "Workers' alliance", "Proletarian revolution",
        "Economic revolution", "Socialist planning", "State socialism", "Mao Zedong", "Bolshevik party",
        "Classless society", "Proletarian dictatorship", "The Soviet model", "Communist revolution", "Economic equality",
        "Red flag", "Anti-imperialism", "Soviet communism", "Communist revolution", "Proletariat leadership",
        "Cuban socialism", "Worker's rights", "State economy", "Socialist solidarity", "People's commune", "Leninist ideology",
        "Marxist philosophy", "People's war", "Communist politics", "Communist ideology", "Red wave", "Economic democracy",
        "Socialist society", "Working-class movement", "Proletariat unity", "Workers' rights", "International proletariat",
        "Proletarian party", "Class struggle", "Communist vision", "People's liberation", "Workers' revolution",
        "Revolutionary ideology", "Proletariat solidarity", "Anti-imperialist struggle", "Marxist theory", "Workers' unity",
        "Socialist economy", "Workers' revolution", "International communism", "Class conflict", "Socialist state",
        "Proletariat power", "Anti-fascist struggle", "Soviet communism", "Anti-imperialism", "Proletarian state",
        "Socialist principles", "Communist unity", "People's revolution", "Communist party", "Communist leadership",
        "Soviet power", "Collective farm", "Workers' struggle", "Revolutionary movement", "Proletarian ideology",
        "Communist society", "Bolshevik leadership", "Proletariat empowerment", "Revolutionary struggle",
        "Communist values", "Workers' struggle", "Social equality", "Marxist-Leninist principles", "State power",
        "Proletariat education", "Communist government", "Anti-capitalist ideology", "People's republic",
        "Soviet socialism", "Proletariat class", "Collective farm", "Proletarian state", "Soviet revolution",
        "Cultural revolution", "Workers' state", "Anti-imperialist politics", "Socialist revolution", "Red flag",
        "Marxist-Leninist state", "Proletariat uprising", "Communist solidarity", "Revolutionary leadership",
        "Economic system", "Socialist ideology", "People's war", "Proletariat empowerment", "Class-based society",
        "Soviet system", "Proletarian unity", "Communist principles", "Workers' council", "Marxist analysis",
        "Proletarian culture", "Bolshevik ideology", "Red terror", "State socialism", "Class warfare", "Marxist philosophy"
    ];


    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission
        const lowercasedInputText = _inputText.toLowerCase();
        // Check if _inputText contains any communism word
        const containsCommunismWord = communismWords.some(word => lowercasedInputText.includes(word.toLowerCase()));

        if (containsCommunismWord) {
            console.log("The input text contains at least one communism-related word.");
            onNewInputText(_inputText);  // Call the passed function with the _inputText
        } else {
            console.log("The input text does not contain any communism-related words.");
        }

    };
    return (

        <form className="w-full max-w-2xl mx-auto" onSubmit={handleSubmit} >
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <Input value={_inputText} onChange={(e) => setInputText(e.target.value)} />

                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary-light 
                hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </form>

    )
}