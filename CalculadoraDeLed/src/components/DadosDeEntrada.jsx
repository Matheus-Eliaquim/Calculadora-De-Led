import { useState } from 'react'
import Button from './buttons/Button.jsx'
import HomeButton from './buttons/HomeButton.jsx'
import './DadosDeEntrada.css'
import './responsividade.css'

//importando componentes do Material UI
import Tooltip from '@mui/material/Tooltip'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const DadosEntrada = ({ entradaDados, back }) => {
    // Valores dos campos
    const [potencia, setPotencia] = useState("")
    const [rolo, setRolo] = useState("")
    const [coeficiente, setCoeficiente] = useState("")

    // Mensagens de erro  
    const [erro, setErro] = useState("")

    // Valida a potência
    const handlePotencia = (e) => {
        const valor = e.target.value

        // Aceita apenas números e um ponto decimal
        if (!/^\d*\.?\d*$/.test(valor)) return

        setPotencia(valor)
        setErro("")
    }

    const handleRolo = (e) => {
        const valor = e.target.value

        // Aceita apenas números e um ponto decimal
        if (!/^\d*\.?\d*$/.test(valor)) return

        setRolo(valor)
        setErro("")
    }

    const handleCoeficiente = (e) => {
        const valor = e.target.value

        // Aceita apenas números e um ponto decimal
        if (!/^\d*\.?\d*$/.test(valor)) return

        setCoeficiente(valor)
        setErro("")
    }

    // Salva os dados
    const savedDados = (e) => {
        e.preventDefault()

        // Verifica se todos os campos foram preenchidos
        if (!potencia || !rolo || !coeficiente) {
            setErro(!coeficiente || !rolo || !potencia ? "Os campos Potencia, Tamanho, e Coenciente são obrigatorios!" : "")
            return
        }

        // Envia os valores como números
        entradaDados({
            potencia: Number(potencia),
            rolo: Number(rolo),
            coeficiente: Number(coeficiente)
        })
    }

    return (
        <>

            <div id='home'>
                <HomeButton action={() => back(null)} />
            </div>


            <div className="erro">
                {erro && (<span>{erro}</span>)}
            </div>

            <div className="container">
                <form className="form-geral">

                    <label className="divisao">
                        <span className="spanLabel">
                            <span>
                                Potencia da fita (W/metros):
                                <span className="obrigatorio"> *</span>
                            </span>

                            <span>
                                <Tooltip
                                    title={
                                        "Informe a potência da fita em numero inteiro ou decimal.\n" +
                                        "Exemplo: 12\n" +
                                        "Use ponto para valores decimais.\n" +
                                        "Exemplo: 11.50.\n" +
                                        "Não é possível realizar operações aritméticas.\n" +
                                        "Exemplo: 2+5, 5-2, 2*6, 6/2"
                                    }
                                    arrow
                                    slotProps={{
                                        tooltip: {
                                            sx: {
                                                whiteSpace: 'pre-line'
                                            }
                                        }
                                    }}
                                >
                                    <InfoOutlinedIcon
                                        fontSize="small"
                                        sx={{
                                            color: 'yellow',
                                            cursor: 'help'
                                        }}
                                    />
                                </Tooltip>
                            </span>
                        </span>

                        <input
                            type="text"
                            name="potencia"
                            placeholder="12"
                            value={potencia}
                            onChange={handlePotencia}
                            className="dados-iniciais"
                        />

                    </label>

                    <label className="divisao">
                        <span className="spanLabel">
                            <span>Tamanho do rolo (Metros):
                                <span className="obrigatorio"> *</span>
                            </span>


                            <span>
                                <Tooltip
                                    title={
                                        "Informe o tamanho do rolo de fita led em numero inteiro ou decimal.\n" +
                                        " Exemplo: 5\nUse ponto como separador de valores decimais.\n" +
                                        "Exemplo: 11.50. \nNão é possivel realizar operações aritiméticas. \n" +
                                        "Exemplo: 2+5, 5-2, 2*6, 6/2"
                                    }
                                    arrow
                                    slotProps={{
                                        tooltip: {
                                            sx: {
                                                whiteSpace: 'pre-line'
                                            }
                                        }
                                    }}
                                >
                                    <InfoOutlinedIcon
                                        fontSize="small"
                                        sx={{
                                            color: 'yellow',
                                            cursor: 'help'
                                        }}
                                    />
                                </Tooltip>
                            </span>

                        </span>

                        <input
                            type="text"
                            name="roloDeFita"
                            placeholder="5"
                            value={rolo}
                            onChange={handleRolo}
                            className="dados-iniciais"
                        />

                    </label>

                    <label className="divisao">
                        <span className="spanLabel">
                            <span>Coeficiente de Segurança (%):
                                <span className="obrigatorio"> *</span>
                            </span>

                            <span>
                                <Tooltip
                                    title={
                                        "Informe o coeficiente de segurança em numero inteiro ou decimal.\n" +
                                        "Exemplo: 20\nUse ponto como separador de valores decimais." +
                                        "Exemplo: 15.50. \nNão é possivel realizar operações aritiméticas. \n" +
                                        "Exemplo: 2+5, 5-2, 2*6, 6/2"
                                    }
                                    arrow
                                    slotProps={{
                                        tooltip: {
                                            sx: {
                                                whiteSpace: 'pre-line'
                                            }
                                        }
                                    }}
                                >
                                    <InfoOutlinedIcon
                                        fontSize="small"
                                        sx={{
                                            color: 'yellow',
                                            cursor: 'help'
                                        }}
                                    />
                                </Tooltip>
                            </span>

                        </span>

                        <input
                            type="text"
                            name="coeficiente"
                            placeholder="20"
                            value={coeficiente}
                            onChange={handleCoeficiente}
                            className="dados-iniciais"
                        />
                    </label>

                </form>

                <Button
                    id="save"
                    text="Salvar Configurações"
                    action={savedDados}
                />
            </div>
        </>
    )
}

export default DadosEntrada