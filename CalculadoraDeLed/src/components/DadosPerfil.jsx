import './responsividade.css' // Estilos de responsividade
import './DadosDeEntrada.css'

import { useState } from 'react'
import Button from './Button.jsx'
import HomeButton from './HomeButton.jsx'

//importando componentes do Material UI
import Tooltip from '@mui/material/Tooltip'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const DadosPerfil = ({ enviarRelatorio, enviarMetragem, back }) => {

    const [metragem, setMetragem] = useState("")

    // Mensagens de erro  
    const [erroPerf, setErroPerf] = useState("")

    // Valida a metragem
    const handleMetragem = (e) => {
        const valor = e.target.value

        // Permite apenas números e um ponto decimal
        if (!/^\d*\.?\d*$/.test(valor)) return

        setMetragem(valor)
        setErroPerf("")
    }

    // Impede o envio pelo Enter
    const preventEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
        }
    }

    // Envia a metragem
    const openTab = () => {

        // Verifica se todos os campos foram preenchidos
        if (!metragem) {
            setErroPerf(!metragem ? "O campo Tamanho é obrigatorio!" : "")
            return
        }

        enviarRelatorio("tabela")
        enviarMetragem(Number(metragem))
    }

    return (
        <>

            <div id='home'>
                <HomeButton action={() => back(null)} />
            </div>


            <div className="erro">
                {erroPerf && (<span>{erroPerf}</span>)}
            </div>

            <div className="container">
                <form className="form-geral">
                    <label className="divisao">
                        <span className="spanLabel">
                            <span>
                                Tamanho do perfil: (m)
                                <span className="obrigatorio">*</span>
                            </span>

                            <span>
                                <Tooltip
                                    title={
                                        "Informe o tamanho do perfil em numero inteiro ou decimal.\n" +
                                        "Exemplo: 2 ou 2.00\n" +
                                        "Use ponto para valores decimais.\n" +
                                        "Exemplo: 2.50.\n" +
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
                            name="metragem"
                            placeholder="EX: 2.50"
                            className="dados-iniciais"
                            value={metragem}
                            onChange={handleMetragem}
                            onKeyDown={preventEnter}
                        />
                    </label>
                </form>

                <Button
                    id="save"
                    text="Salvar Configurações"
                    action={openTab}
                />
            </div>
        </>
    )
}

export default DadosPerfil