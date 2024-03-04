        import PropTypes from 'prop-types';

        const Personas = ({lastName, firstName, age, hairColor  }) => {
        return (
            <div className='card'>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
        }
        Personas.propTypes = {
            lastName: PropTypes.string.isRequired,
            firstName: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            hairColor: PropTypes.string.isRequired
        };

    export default Personas
