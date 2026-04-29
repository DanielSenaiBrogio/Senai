'use client';

import styles from "./page.module.css";

export default function TelaProdutoCadastro(){
    return(
        <section className={styles.container}>
           
            <h3 className={styles.title}>Cadastro de Produto</h3>



            {/* Imagem do Produto */}
            <div className={styles.imagemContainer}>
                <div className={styles.imagemPreview}>
                    <img className={styles.CanecaImg} src="https://d9a2b0af1mfg9.cloudfront.net/Custom/Content/Products/15/77/15773_caneca-350-ml-porcelana-schmidt-mod-swid-069909_m1_637907153258208911.webp" alt="Caneca" />
                </div>
                <div className={styles.imagemTexto}>
                   
                </div>
            </div>


            <label htmlFor="nome" className={styles.label}>Nome do Produto</label>
            <input className={styles.input} type="text" name="nome" placeholder="Digite o nome do produto" />

            <label htmlFor="descricao" className={styles.label}>Descrição</label>
            <textarea className={styles.textarea} name="descricao" placeholder="Digite a descrição do produto">
            </textarea>

            <label htmlFor="categoria" className={styles.label}>Categoria</label>
            <select className={styles.select} name="categoria">
                <option value="">Selecione uma categoria</option>
                <option value="canecas">Canecas</option>
                <option value="chaleiras">Chaleiras</option>
                <option value="utensilios">Utensílios</option>
                <option value="pratos">Pratos</option>
                <option value="panelas">Panelas</option>
            </select>

            <div className={styles.checkboxContainer}>
                <input type="checkbox" className={styles.checkbox} id="habilitar" />
                <label htmlFor="habilitar" className={styles.checkboxLabel}>
                    Habilitar produto para venda
                </label>
            </div>

            <div className={styles.botoesContainer}>
                <button className={`${styles.button} ${styles.excluir}`}>Reset</button>
                <button className={`${styles.button} ${styles.salvar}`}>Salvar</button>
            </div>
        </section>
    );
}