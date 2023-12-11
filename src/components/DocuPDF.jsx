import PropTypes from "prop-types";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import "jspdf-autotable";

const DocuPDF = ({ lista }) => {
  const renderRow = (item) => (
    <View style={styles.row} key={item.id}>
      <Text style={[styles.cell, styles.numero]}>{item.n}</Text>
      <Text style={[styles.cell, styles.otros]}>100</Text>
      <Text style={[styles.cell, styles.otros]}>{item.totalUso}</Text>
      <Text style={[styles.cell, styles.otros]}>{item.totalReparacion}</Text>
      <Text style={[styles.cell, styles.otros]}>{item.precioHoraOcio}</Text>
      <Text style={[styles.cell, styles.otros]}>{item.precioEspecialista}</Text>
      <Text style={[styles.cell, styles.otros]}>{item.precioOcioTotal}</Text>
      <Text style={[styles.cell, styles.otros]}>{item.sueldoEspecialista}</Text>
    </View>
  );
  return (
    <Document>
      <Page size="A4">
        <View style={styles.general} id="HeaderTabla">
          <Text style={styles.title}>Tabla de Resultados</Text>
          <Text style={styles.text}>
            Una vez ya corrieron los datos de la simulacion estos son guardados
            y almacenados, por lo cual se pueden ver los distintos resultados de
            las simulaciones
          </Text>
          <Text style={styles.list}>
            <Text style={styles.subtitulo}>N°:</Text> Este es el identificador
            de a que numero de simulacion pertenecen estos resultados.
          </Text>
          <Text style={styles.list}>
            <Text style={styles.subtitulo}>Cant maquinas:</Text> Esta es la
            cantidad de maquinas que se usaron para hacer la simulacion.
          </Text>
          <Text style={styles.list}>
            <Text style={styles.subtitulo}>Promedio hora de uso:</Text> Este es
            el promedio de la horas que se uso una computadora hasta antes de
            que se descompongan.
          </Text>
          <Text style={styles.list}>
            <Text style={styles.subtitulo}>
              Promedio de minutos de reparacion:
            </Text>
            Este es el promedio de minutos que se tardo un especialista en
            arreglar las maquinas descompuestas.
          </Text>
          <Text style={styles.list}>
            <Text style={styles.subtitulo}>
              Precio de maquina/hora de ocio:
            </Text>
            Este es el precio por hora de una maquina durante el tiempo que esta
            descompuesta.
          </Text>
          <Text style={styles.list}>
            <Text style={styles.subtitulo}>Salario/hora:</Text> Este es el
            salario del especialista por la hora de su trabajo arreglando las
            maquinas.
          </Text>
          <Text style={styles.list}>
            <Text style={styles.subtitulo}>Precio ocio total:</Text> Este es el
            total del costo por mas maquinas que estan descompuestas.
          </Text>
          <Text style={styles.list}>
            <Text style={styles.subtitulo}>Salario total:</Text> Este es el
            total a pagar al especialista por el tiempo que arreglo mas
            maquinas.
          </Text>

          <Text style={styles.concept}>
            Los resultados totales de la simulacion son:
          </Text>
          <View style={styles.tabla}>
            <View key={"0"} style={styles.header}>
              <Text style={[styles.headerText, styles.numero]}>n°</Text>
              <Text style={[styles.headerText, styles.otros]}>
                Cant. Maquinas
              </Text>
              <Text style={[styles.headerText, styles.otros]}>Total Uso</Text>
              <Text style={[styles.headerText, styles.otros]}>
                TotalReparacion
              </Text>
              <Text style={[styles.headerText, styles.otros]}>
                Precio Hora Ocio
              </Text>
              <Text style={[styles.headerText, styles.otros]}>
                Precio Especialista
              </Text>
              <Text style={[styles.headerText, styles.otros]}>
                Precio Ocio Total
              </Text>
              <Text style={[styles.headerText, styles.otros]}>
                Sueldo Especialista
              </Text>
            </View>
            {lista.map(renderRow)}
          </View>
        </View>
      </Page>
    </Document>
  );
};
const styles = StyleSheet.create({
  general: {
    fontSize: "10px",
    padding: 10,
  },
  title: {
    fontSize: "16px",
    padding: 10,
    textAlign: "center",
  },
  text: {
    fontSize: "11px",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: "11px",
  },
  list: {
    fontSize: "10px",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 2,
  },
  tabla: {
    margin: "10px",
  },
  numero: {
    width: "12px",
  },
  otros: {
    width: "11%",
    display: "block",
  },
  concept: {
    fontSize: "10px",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
    marginTop: 6,
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
  },
});

DocuPDF.propTypes = {
  lista: PropTypes.array.isRequired,
};
export default DocuPDF;
