export default function Input({ value, onChange }) {
    return (
        <input
            className={`block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-inputBg-dark dark:text-white  bg-inputBg-light text-gray-900'
                }`}
            value={value}
            onChange={onChange}
            type="text"
        />
    );
}
